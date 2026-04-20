#!/usr/bin/env python3
"""
Living Cost Atlas City Relocation Report — PDF Generator
================================================
Replace the CITY dict below with your target city data,
then run:  python pdf_generator.py

All monetary values must use the same currency as CITY["currency_sym"].
Column widths always sum to USABLE_W (481.9 pt for A4 with 18mm margins).
"""

# ── INJECT YOUR CITY DATA BELOW ──────────────────────────────────────────────
CITY = {
    # REPLACE THIS ENTIRE DICT WITH YOUR CITY DATA
    # See references/city-data-template.md for the full schema
    "name":             "CITY_NAME",
    "country":          "COUNTRY",
    "year":             "2026",
    "currency_sym":     "$",
    "currency_code":    "USD",
}
# ─────────────────────────────────────────────────────────────────────────────

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table,
                                 TableStyle, PageBreak, HRFlowable, KeepTogether)
from reportlab.lib.colors import HexColor
import os, math

# ── PAGE GEOMETRY ─────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = A4
MARGIN    = 18 * mm
USABLE_W  = PAGE_W - 2 * MARGIN   # 481.9 pt
U         = USABLE_W

# ── BRAND COLORS ─────────────────────────────────────────────────────────────
NAVY      = HexColor('#0D1B2A')
TEAL      = HexColor('#1B4F72')
GOLD      = HexColor('#C9A84C')
LT_TEAL   = HexColor('#AED6F1')
LT_GREY   = HexColor('#F4F6F9')
MID_GREY  = HexColor('#7F8C8D')
DARK_GREY = HexColor('#2C3E50')
GRN       = HexColor('#1E8449')
RED       = HexColor('#C0392B')
WHITE     = colors.white
AMBER     = HexColor('#D4860B')

# ── PARAGRAPH STYLE FACTORY ───────────────────────────────────────────────────
_ss = getSampleStyleSheet()
def PS(name, **kw):
    parent = kw.pop('parent', 'Normal')
    defaults = dict(fontName='Helvetica', fontSize=9, leading=13,
                    textColor=DARK_GREY, spaceAfter=0, spaceBefore=0)
    defaults.update(kw)
    return ParagraphStyle(name, parent=_ss[parent], **defaults)

CT   = PS('CT',   fontSize=8.5, leading=12.5)
CTB  = PS('CTB',  fontSize=8.5, leading=12.5, fontName='Helvetica-Bold')
CTW  = PS('CTW',  fontSize=8.5, leading=12.5, textColor=WHITE)
CTBW = PS('CTBW', fontSize=8.5, leading=12.5, fontName='Helvetica-Bold', textColor=WHITE)
CTC  = PS('CTC',  fontSize=8.5, leading=12.5, alignment=TA_CENTER)
CTBC = PS('CTBC', fontSize=8.5, leading=12.5, fontName='Helvetica-Bold', alignment=TA_CENTER)
CTCW = PS('CTCW', fontSize=8.5, leading=12.5, alignment=TA_CENTER, textColor=WHITE)
CTBCW= PS('CTBCW',fontSize=8.5, leading=12.5, fontName='Helvetica-Bold', alignment=TA_CENTER, textColor=WHITE)
CTNV = PS('CTNV', fontSize=8.5, leading=12.5, fontName='Helvetica-Bold', textColor=NAVY)
CTGD = PS('CTGD', fontSize=9,   leading=13,   fontName='Helvetica-Bold', alignment=TA_CENTER, textColor=GOLD)
CTGR = PS('CTGR', fontSize=8.5, leading=12.5, fontName='Helvetica-Bold', textColor=GRN)
CTRD = PS('CTRD', fontSize=8.5, leading=12.5, fontName='Helvetica-Bold', textColor=RED)
CTAM = PS('CTAM', fontSize=8.5, leading=12.5, fontName='Helvetica-Bold', textColor=AMBER)

H1   = PS('H1',   parent='Heading1', fontSize=18, fontName='Helvetica-Bold', textColor=NAVY, spaceAfter=6, spaceBefore=14, leading=24)
H2   = PS('H2',   parent='Heading2', fontSize=12, fontName='Helvetica-Bold', textColor=TEAL, spaceAfter=4, spaceBefore=10, leading=16)
H3   = PS('H3',   parent='Heading3', fontSize=10, fontName='Helvetica-Bold', textColor=DARK_GREY, spaceAfter=3, spaceBefore=8, leading=14)
BODY = PS('Body', fontSize=9.5, leading=15, alignment=TA_JUSTIFY, spaceAfter=5)
BODS = PS('Bods', fontSize=8.5, leading=13, alignment=TA_JUSTIFY, spaceAfter=4)
CAP  = PS('Cap',  fontSize=7.5, leading=11, textColor=MID_GREY, fontName='Helvetica-Oblique', alignment=TA_CENTER)

# ── HELPERS ───────────────────────────────────────────────────────────────────
def P(t, s=BODY):    return Paragraph(t, s)
def SP(n=6):          return Spacer(1, n)
def HR(c=GOLD,th=1):  return HRFlowable(width='100%', thickness=th, color=c, spaceAfter=5, spaceBefore=5)
def C(sym=None):      return sym or CITY.get("currency_sym", "$")

def section_hdr(text, num=None):
    label = f"{num}.  " if num else ""
    return [
        SP(2), HRFlowable(width='100%', thickness=3, color=GOLD, spaceAfter=0, spaceBefore=0),
        SP(3), P(f"{label}{text}", H1),
        HRFlowable(width='100%', thickness=0.6, color=LT_TEAL, spaceAfter=6, spaceBefore=0),
    ]

def sub(t):  return [SP(4), P(t, H2)]
def sub3(t): return [SP(2), P(t, H3)]

def tbl(data, widths, hdr_bg=TEAL, alt=LT_GREY, rpad=6, fs=8.5):
    """Build a wrapped, auto-height table. widths must sum to U."""
    wrapped = []
    for ri, row in enumerate(data):
        new_row = []
        for ci, cell in enumerate(row):
            if isinstance(cell, str):
                if ri == 0:
                    new_row.append(Paragraph(cell, PS(f'h{ci}', fontSize=fs, fontName='Helvetica-Bold',
                                                       textColor=WHITE, leading=fs+3, alignment=TA_CENTER)))
                else:
                    new_row.append(Paragraph(cell, PS(f'c{ri}{ci}', fontSize=fs, leading=fs+3.5,
                                                       alignment=TA_LEFT if ci == 0 else TA_CENTER)))
            else:
                new_row.append(cell)
        wrapped.append(new_row)
    ts = TableStyle([
        ('BACKGROUND',    (0,0), (-1,0),  hdr_bg),
        ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
        ('ROWBACKGROUNDS',(0,1), (-1,-1), [WHITE, alt]),
        ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#D5DCE4')),
        ('TOPPADDING',    (0,0), (-1,-1), rpad),
        ('BOTTOMPADDING', (0,0), (-1,-1), rpad),
        ('LEFTPADDING',   (0,0), (-1,-1), 7),
        ('RIGHTPADDING',  (0,0), (-1,-1), 7),
        ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
    ])
    t = Table(wrapped, colWidths=widths, repeatRows=1, hAlign='LEFT')
    t.setStyle(ts)
    return t

def score_color(s):
    return GRN if s >= 8 else (AMBER if s >= 6 else RED)

def verdict_badge(text, bg):
    return Paragraph(f"<b>{text}</b>",
                     PS(f'vb{text[:3]}', fontSize=8, fontName='Helvetica-Bold',
                        textColor=WHITE, alignment=TA_CENTER, leading=11,
                        backColor=bg, borderPad=4))

def level_badge(text, bg):
    return Paragraph(f"<b>{text}</b>",
                     PS(f'lb{text[:3]}', fontSize=7.5, fontName='Helvetica-Bold',
                        textColor=WHITE, alignment=TA_CENTER, leading=11,
                        backColor=bg, borderPad=5))

# ── PAGE CANVASES ─────────────────────────────────────────────────────────────
def cover_canvas(c, doc):
    c.saveState()
    c.setFillColor(NAVY);  c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(HexColor('#0A1520')); c.rect(0, 0, PAGE_W, PAGE_H*0.42, fill=1, stroke=0)
    c.setFillColor(GOLD);  c.rect(0, PAGE_H-6*mm, PAGE_W, 6*mm, fill=1, stroke=0)
    c.setFillColor(GOLD);  c.rect(0, 0, PAGE_W, 5*mm, fill=1, stroke=0)
    c.setFillColor(TEAL);  c.rect(0, 0, 10*mm, PAGE_H, fill=1, stroke=0)
    c.setFillColor(HexColor('#11263A')); c.rect(10*mm, PAGE_H*0.40, PAGE_W, PAGE_H*0.20, fill=1, stroke=0)
    c.setFillColor(HexColor('#0F2030')); c.setFont('Helvetica-Bold', 180)
    c.drawString(PAGE_W*0.28, 12*mm, "TC")
    c.restoreState()

def body_canvas(c, doc):
    c.saveState()
    c.setFillColor(NAVY);  c.rect(0, PAGE_H-13*mm, PAGE_W, 13*mm, fill=1, stroke=0)
    c.setFillColor(GOLD);  c.rect(0, PAGE_H-14.5*mm, PAGE_W, 1.5*mm, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 7.5); c.setFillColor(WHITE)
    c.drawString(MARGIN, PAGE_H-8.5*mm, "TRIPCOST RELOCATION INTELLIGENCE  |  CONFIDENTIAL")
    c.setFont('Helvetica', 7.5); c.setFillColor(GOLD)
    city_hdr = f"{CITY['name'].upper()}  {CITY['year']}  —  COST OF LIVING REPORT"
    c.drawRightString(PAGE_W-MARGIN, PAGE_H-8.5*mm, city_hdr)
    c.setFillColor(LT_GREY); c.rect(0, 0, PAGE_W, 9.5*mm, fill=1, stroke=0)
    c.setFillColor(GOLD);    c.rect(0, 9.5*mm, PAGE_W, 1*mm, fill=1, stroke=0)
    c.setFont('Helvetica', 7); c.setFillColor(MID_GREY)
    c.drawString(MARGIN, 3*mm, f"© {CITY['year']} Living Cost Atlas Research.  All data reflects {CITY['year']} market estimates.")
    c.setFont('Helvetica-Bold', 8); c.setFillColor(NAVY)
    c.drawRightString(PAGE_W-MARGIN, 3*mm, f"— {doc.page} —")
    c.restoreState()

def page_router(c, doc):
    if doc.page == 1: cover_canvas(c, doc)
    else: body_canvas(c, doc)

# ── STORY BUILDER ─────────────────────────────────────────────────────────────
story = []

def add_cover():
    story.append(P("TRIPCOST", PS('brand', fontSize=16, fontName='Helvetica-Bold',
                                   textColor=GOLD, leading=20, spaceBefore=215)))
    story.append(P("RELOCATION INTELLIGENCE SERIES  ·  " + CITY["year"],
                   PS('ri', fontSize=9, textColor=LT_TEAL, leading=13)))
    story.append(SP(20))
    story.append(P("The Complete Cost of Living<br/>&amp; Relocation Guide",
                   PS('ct1', fontSize=22, fontName='Helvetica-Bold', textColor=WHITE, leading=30)))
    story.append(SP(4))
    story.append(P(CITY["name"].upper() + ", " + CITY["country"].upper(),
                   PS('ct2', fontSize=38, fontName='Helvetica-Bold', textColor=GOLD, leading=48)))
    story.append(SP(2))
    story.append(P(CITY["year"] + "  E D I T I O N",
                   PS('ed', fontSize=15, fontName='Helvetica-Bold', textColor=LT_TEAL, leading=22)))
    story.append(SP(12))
    story.append(HRFlowable(width='70%', thickness=1.5, color=GOLD, hAlign='LEFT'))
    story.append(SP(10))
    story.append(P("Data-Driven Insights for Remote Workers, Expats &amp; Global Professionals",
                   PS('sub', fontSize=12, fontName='Helvetica-Oblique', textColor=LT_TEAL, leading=18)))
    story.append(SP(55))
    story.append(P(f"Prepared by  <b>Living Cost Atlas Research</b>   |   Relocation Intelligence Report   |   {CITY['year']}",
                   PS('prep', fontSize=8.5, textColor=MID_GREY, leading=13)))
    story.append(PageBreak())

def add_toc():
    story.extend(section_hdr("Table of Contents"))
    story.append(SP(6))
    entries = [
        ("", "Section", "Page"),
        ("01","Executive Summary","3"),
        ("02","Quick Fact Sheet","4"),
        ("03","Detailed Cost Breakdown","5"),
        ("04","Monthly Budget Scenarios","9"),
        ("05","Neighborhood Analysis","11"),
        ("06","Work Infrastructure & Digital Readiness","14"),
        ("07","Safety & Quality of Life","16"),
        ("08","City Comparison — Peer Cities","18"),
        ("09","Pros & Cons Summary","20"),
        ("10","Who Should Move?","21"),
        ("11","Risk Factors & Economic Outlook","22"),
        ("12","LCA Index Methodology","24"),
        ("13","Final Verdict","25"),
    ]
    rows = []
    for num, title, pg in entries:
        if num == "":
            rows.append([Paragraph(num, CTBCW), Paragraph(title, CTBCW),
                         Paragraph(pg, PS('tc3', fontSize=8.5, fontName='Helvetica-Bold',
                                           textColor=WHITE, alignment=TA_CENTER))])
        else:
            rows.append([Paragraph(num, PS('tcn', fontSize=8.5, fontName='Helvetica-Bold',
                                            textColor=GOLD, alignment=TA_CENTER)),
                         Paragraph(title, CT), Paragraph(pg, CTC)])
    ts = TableStyle([
        ('BACKGROUND',    (0,0), (-1,0), NAVY),
        ('LINEBELOW',     (0,0), (-1,0), 1.5, GOLD),
        ('ROWBACKGROUNDS',(0,1), (-1,-1), [WHITE, LT_GREY]),
        ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#D5DCE4')),
        ('TOPPADDING',    (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('LEFTPADDING',   (0,0), (-1,-1), 8),
        ('RIGHTPADDING',  (0,0), (-1,-1), 8),
        ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
    ])
    t = Table(rows, colWidths=[25, U-25-87, 87], repeatRows=1)
    t.setStyle(ts)
    story.append(t)
    story.append(PageBreak())

def add_exec():
    story.extend(section_hdr("Executive Summary", "01"))
    story.append(P(
        f"{CITY['name']} has emerged as a compelling relocation destination for remote workers, "
        f"digital nomads, and international professionals. As of {CITY['year']}, this report by "
        f"Living Cost Atlas Research provides a rigorous, data-driven assessment of the city's cost "
        f"landscape, livability metrics, and relocation risk profile."))
    story.append(SP(8))
    story.extend(sub("Estimated Monthly Living Costs"))
    d = [
        ["Resident Profile", f"Monthly Estimate ({CITY['currency_code']})", "Lifestyle Descriptor"],
        ["Budget Nomad",                f"{CITY['budget_nomad_low']} – {CITY['budget_nomad_high']}",  "Shared housing, local transport, home cooking"],
        ["Standard Remote Professional", f"{CITY['budget_std_low']} – {CITY['budget_std_high']}",    "Private 1BR, coworking, regular dining out"],
        ["Premium Lifestyle Expat",      f"{CITY['budget_premium_low']} – {CITY['budget_premium_high']}+", "Prime district, premium services, schooling"],
    ]
    story.append(tbl(d, [150, 176, U-150-176]))
    story.append(SP(4))
    story.append(P(f"Costs include rent, utilities, food, transport and discretionary spending. "
                   f"International schooling, vehicle ownership and premium health cover are additional.", CAP))
    story.append(SP(10))

    story.extend(sub("Key Strengths"))
    pros = CITY.get("pros", [])
    d2 = [["Strength", "Commentary"]]
    for s, c in pros:
        d2.append([P(f"<b>{s}</b>", CTB), P(c, CT)])
    story.append(tbl(d2, [155, U-155]))
    story.append(SP(10))

    story.extend(sub("Key Risks"))
    d3 = [["Risk Factor", "Impact Summary"]]
    for name, *_ in CITY.get("risks", []):
        analysis = CITY.get("risks", [])
        # get analysis from risks list
    risks_list = CITY.get("risks", [])
    d3 = [["Risk Factor", "Impact Summary"]]
    for item in risks_list:
        d3.append([P(f"<b>{item[0]}</b>", CTB), P(item[3], CT)])
    story.append(tbl(d3, [155, U-155], hdr_bg=HexColor('#7D3C14')))
    story.append(SP(10))

    story.extend(sub(f"LCA Index Score — {CITY['name']} {CITY['year']}"))
    idx = CITY.get("index_scores", {})
    rat = CITY.get("index_rationale", {})
    weights = {"Affordability":0.30,"Infrastructure":0.20,"Safety":0.15,"Quality of Life":0.20,"Economic Stability":0.15}
    total = sum(idx.get(k,0)*w for k,w in weights.items())
    sd = [["Dimension","Weight","Score","Contribution","Rationale"]]
    for dim, w in weights.items():
        sc = idx.get(dim, 0)
        sd.append([dim, f"{int(w*100)} %", f"{sc}/10", f"{sc*w:.2f}", rat.get(dim,"")])
    sd.append(["COMPOSITE INDEX SCORE","100 %","—",f"{total:.2f}/10","STRONG BUY tier" if total >= 7 else "MODERATE tier"])

    wrapped = []
    for i, row in enumerate(sd):
        if i == 0:
            wrapped.append([Paragraph(c, CTBCW) for c in row])
        elif i == len(sd)-1:
            wrapped.append([
                Paragraph(row[0], CTNV), Paragraph(row[1], CTBC),
                Paragraph(row[2], CTBC), Paragraph(row[3], CTGD),
                Paragraph(row[4], CTBC),
            ])
        else:
            wrapped.append([Paragraph(row[0], CTB), Paragraph(row[1], CTC),
                             Paragraph(row[2], CTC), Paragraph(row[3], CTC),
                             Paragraph(row[4], CT)])
    ts2 = TableStyle([
        ('BACKGROUND',    (0,0), (-1,0),  NAVY),
        ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
        ('ROWBACKGROUNDS',(0,1), (-1,-2), [WHITE, LT_GREY]),
        ('BACKGROUND',    (0,-1),(-1,-1), GOLD),
        ('LINEABOVE',     (0,-1),(-1,-1), 1.5, NAVY),
        ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#D5DCE4')),
        ('TOPPADDING',    (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('LEFTPADDING',   (0,0), (-1,-1), 7),
        ('RIGHTPADDING',  (0,0), (-1,-1), 7),
        ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
    ])
    t3 = Table(wrapped, colWidths=[120,45,55,60,U-120-45-55-60], repeatRows=1)
    t3.setStyle(ts2)
    story.append(t3)
    story.append(PageBreak())

def add_facts():
    story.extend(section_hdr("Quick Fact Sheet", "02"))
    story.append(P(f"Rapid-reference overview of {CITY['name']}'s key parameters as of Q1 {CITY['year']}.", BODS))
    story.append(SP(8))
    W = [165, 170, U-165-170]
    facts = [
        ["Parameter","Value / Estimate","Source / Context"],
        ["Country",           CITY["country"],                "Sovereign state; visa framework varies"],
        ["City Population",   CITY.get("population_city","N/A"),   "City proper — national census"],
        ["Metro Population",  CITY.get("population_metro","N/A"),  "Metropolitan area estimate"],
        ["Currency",          f"{CITY.get('currency_code','—')}",   "Primary transaction currency"],
        ["Official Language", CITY.get("official_lang","N/A"),      "Administrative language"],
        ["English Proficiency",CITY.get("english_level","N/A"),     "EF EPI / expat community assessment"],
        ["Time Zone",         CITY.get("timezone","N/A"),           "UTC offset; relevant for remote work"],
        ["Rent — 1BR City Centre",    CITY.get("rent_1br_centre","N/A"),  f"{CITY['currency_code']}/month — varies by district"],
        ["Rent — 1BR Outside Centre", CITY.get("rent_1br_outside","N/A"), "Outer / suburban districts"],
        ["Rent — 2BR City Centre",    CITY.get("rent_2br_centre","N/A"),  "Family / couple configuration"],
        ["Rent — 2BR Outside Centre", CITY.get("rent_2br_outside","N/A"), "Rising; metro expansion driving demand"],
        ["Coworking — Hot Desk",      CITY.get("cowork_hotdesk","N/A"),   "Per month; city average"],
        ["Coworking — Dedicated Desk",CITY.get("cowork_dedicated","N/A"), f"Premium operators: {CITY.get('cowork_premium_names','N/A')}"],
        ["Internet Speed (avg)",      CITY.get("internet_speed","N/A"),   f"Providers: {CITY.get('internet_providers','N/A')}"],
        ["Home Internet (monthly)",   CITY.get("internet_cost","N/A"),    "Fiber bundle estimate"],
        ["Mobile Plan (20+ GB)",      CITY.get("mobile_20gb","N/A"),      f"Providers: {CITY.get('mobile_providers','N/A')}"],
        ["Safety Index",              CITY.get("safety_index","N/A"),      "Numbeo or equivalent composite"],
        ["Visa Options",              CITY.get("visa_options","N/A"),      "Key legal entry / residency pathways"],
        ["Climate",                   CITY.get("climate_type","N/A"),      "Köppen classification"],
        ["Annual Sunshine Hours",     CITY.get("sunshine_hours","N/A"),    "IPMA / WMO national data"],
        ["Healthcare System",         CITY.get("healthcare","N/A"),        "Public + private overview"],
        ["Avg. Local Net Salary",     CITY.get("avg_local_salary","N/A"),  "National median; expats typically earn more"],
    ]
    story.append(tbl(facts, W))
    story.append(SP(5))
    story.append(P("Sources: National census, Numbeo, EF EPI, national meteorology service, ANACOM / equivalent. All figures reflect 2026 estimates.", CAP))
    story.append(PageBreak())

def add_costs():
    story.extend(section_hdr("Detailed Cost Breakdown", "03"))
    story.append(P(f"Itemized monthly cost estimates for {CITY['name']} {CITY['year']}. "
                   f"All values in {CITY['currency_code']}. Ranges represent realistic floors and ceilings."))
    story.append(SP(8))
    sym = CITY["currency_sym"]

    # 3.1 Housing
    story.extend(sub("3.1  Housing & Accommodation"))
    h = [
        ["Property Type","City Centre","Outside Centre","Premium District","Budget Zone"],
        ["Studio / 0BR",          CITY.get("rent_studio_centre","N/A"),  CITY.get("rent_studio_outside","N/A"),  "N/A","N/A"],
        ["1-Bedroom Apartment",   CITY.get("rent_1br_centre","N/A"),     CITY.get("rent_1br_outside","N/A"),     "N/A","N/A"],
        ["2-Bedroom Apartment",   CITY.get("rent_2br_centre","N/A"),     CITY.get("rent_2br_outside","N/A"),     "N/A","N/A"],
        ["3-Bedroom Apartment",   CITY.get("rent_3br_centre","N/A"),     CITY.get("rent_3br_outside","N/A"),     "N/A","N/A"],
        ["Coliving / Shared Room",CITY.get("rent_coliving","N/A"),        "N/A",                                 "N/A","N/A"],
        ["Short-Term Furnished",  CITY.get("rent_shortterm","N/A"),       "N/A",                                 "N/A","N/A"],
    ]
    story.append(tbl(h, [115, 80, 82, 85, U-115-80-82-85]))
    story.append(SP(12))

    # 3.2 Utilities
    story.extend(sub("3.2  Utilities"))
    u2 = [
        ["Utility","Monthly Estimate","Notes"],
        ["Electricity",           CITY.get("util_electricity","N/A"), "Varies with apartment size and season"],
        ["Gas / Heating",         CITY.get("util_gas","N/A"),          "Some cities are electric-only"],
        ["Water",                 CITY.get("util_water","N/A"),         "Often subsidized at municipal level"],
        ["Condominium Fee",       CITY.get("util_condo_fee","N/A"),     "Applies to managed buildings"],
        ["Total (excl. internet)",CITY.get("util_total","N/A"),         "Average 1BR unfurnished apartment"],
    ]
    story.append(tbl(u2, [145, 155, U-145-155]))
    story.append(SP(12))

    # 3.3 Internet
    story.extend(sub("3.3  Internet & Mobile Connectivity"))
    i3 = [
        ["Service","Provider Options","Monthly Cost","Speed / Data"],
        ["Home Fiber (standalone)",   CITY.get("internet_providers","N/A"), CITY.get("internet_cost","N/A"),  CITY.get("internet_speed","N/A")],
        ["Mobile SIM-only (20 GB+)",  CITY.get("mobile_providers","N/A"),   CITY.get("mobile_20gb","N/A"),    "4G / 5G where available"],
        ["Mobile (unlimited data)",   CITY.get("mobile_providers","N/A"),   CITY.get("mobile_unlimited","N/A"),"5G in metro core"],
    ]
    story.append(tbl(i3, [110, 125, 90, U-110-125-90]))
    story.append(SP(12))

    # 3.4 Food
    story.extend(sub("3.4  Food — Groceries & Dining"))
    f4 = [
        ["Category","Item / Description","Estimate"],
        ["Groceries","Monthly basket — solo (budget)",           CITY.get("grocery_solo_budget","N/A")],
        ["Groceries","Monthly basket — solo (standard)",         CITY.get("grocery_solo_std","N/A")],
        ["Groceries","Monthly basket — couple (standard)",       CITY.get("grocery_couple_std","N/A")],
        ["Groceries","Supermarket options",                       CITY.get("grocery_shops","N/A")],
        ["Dining","Local lunch / set menu",                       CITY.get("dining_lunch_menu","N/A")],
        ["Dining","Mid-range restaurant, 2 persons (3 courses)", CITY.get("dining_midrange_2pax","N/A")],
        ["Dining","International / fine dining, 2 persons",      CITY.get("dining_finedining","N/A")],
        ["Dining","Fast food (local / international chain)",      CITY.get("dining_fastfood","N/A")],
        ["Dining","Coffee (espresso / local equivalent)",         CITY.get("dining_coffee","N/A")],
        ["Dining","Beer (local, restaurant, 0.33L)",              CITY.get("dining_beer","N/A")],
        ["Dining","Wine / spirits (bottle, supermarket)",         CITY.get("dining_wine_bottle","N/A")],
    ]
    story.append(tbl(f4, [90, 225, U-90-225]))
    story.append(SP(12))

    # 3.5 Transport
    story.extend(sub("3.5  Transportation"))
    t5 = [
        ["Mode","Option / Description","Monthly Cost"],
        ["Public Transport",  CITY.get("transport_pass_name","Monthly pass"),     CITY.get("transport_pass","N/A")],
        ["Taxi / Rideshare",  "Average 5 km Uber / local rideshare trip",         CITY.get("transport_rideshare_trip","N/A")],
        ["Taxi / Rideshare",  "Monthly rideshare (moderate use)",                 CITY.get("transport_rideshare_month","N/A")],
        ["Car Ownership",     "Petrol per litre (local estimate)",                CITY.get("transport_petrol","N/A")],
        ["Car Ownership",     "Monthly insurance (mid-range vehicle)",            CITY.get("transport_car_insurance","N/A")],
        ["Car Ownership",     "Monthly parking — central area",                   CITY.get("transport_parking","N/A")],
        ["Car Ownership",     "Total car ownership (excl. depreciation)",         CITY.get("transport_car_total","N/A")],
        ["Bicycle / Scooter", "City bike or e-scooter subscription",              CITY.get("transport_bike","N/A")],
        ["Airport Transfer",  "Airport rail / bus single ticket",                 CITY.get("transport_airport","N/A")],
        ["Intercity Train",   "Representative intercity route (single)",          CITY.get("transport_intercity","N/A")],
    ]
    story.append(tbl(t5, [115, 222, U-115-222]))
    story.append(SP(12))

    # 3.6 Other
    story.extend(sub("3.6  Coworking, Fitness, Entertainment & Insurance"))
    e6 = [
        ["Category","Option / Description","Monthly Cost"],
        ["Coworking","Hot desk (standard space)",                       CITY.get("cowork_hotdesk","N/A")],
        ["Coworking","Dedicated desk (mid-range)",                      CITY.get("cowork_dedicated","N/A")],
        ["Coworking","Private 1-person office",                         CITY.get("cowork_private","N/A")],
        ["Coworking",f"Premium ({CITY.get('cowork_premium_names','N/A')})", CITY.get("cowork_premium","N/A")],
        ["Gym","Chain gym membership",                                  CITY.get("gym_chain","N/A")],
        ["Gym","Boutique / CrossFit / yoga studio",                     CITY.get("gym_boutique","N/A")],
        ["Entertainment","Cinema ticket",                               CITY.get("entertainment_cinema","N/A")],
        ["Entertainment","Streaming subscriptions",                     CITY.get("entertainment_streaming","N/A")],
        ["Entertainment","Monthly budget (moderate social life)",       CITY.get("entertainment_monthly","N/A")],
        ["Health Insurance","Basic expat private plan",                 CITY.get("health_insurance_basic","N/A")],
        ["Health Insurance","Comprehensive international plan",         CITY.get("health_insurance_intl","N/A")],
        ["Private School",f"Intl school annual tuition ({CITY.get('school_examples','N/A')})", CITY.get("school_annual","N/A")],
        ["Private School","Monthly equivalent per child",               CITY.get("school_monthly","N/A")],
    ]
    story.append(tbl(e6, [115, 210, U-115-210]))
    story.append(PageBreak())

def add_budgets():
    story.extend(section_hdr("Monthly Budget Scenarios", "04"))
    story.append(P(f"Three archetypal resident configurations for {CITY['name']} {CITY['year']}."))
    story.append(SP(8))

    def budget_tbl(rows, total_val):
        data = [["Expense Category", f"Monthly Estimate ({CITY['currency_code']})"]]
        for cat, val in rows:
            data.append([Paragraph(cat, CT), Paragraph(val, CTC)])
        data.append([Paragraph("<b>TOTAL MONTHLY ESTIMATE</b>", CTNV),
                     Paragraph(f"<b>{total_val}</b>", CTGD)])
        ts = TableStyle([
            ('BACKGROUND',    (0,0), (-1,0),  TEAL),
            ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
            ('ROWBACKGROUNDS',(0,1), (-1,-2), [WHITE, LT_GREY]),
            ('BACKGROUND',    (0,-1),(-1,-1), NAVY),
            ('LINEABOVE',     (0,-1),(-1,-1), 1.5, GOLD),
            ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#D5DCE4')),
            ('TOPPADDING',    (0,0), (-1,-1), 7),
            ('BOTTOMPADDING', (0,0), (-1,-1), 7),
            ('LEFTPADDING',   (0,0), (-1,-1), 8),
            ('RIGHTPADDING',  (0,0), (-1,-1), 8),
            ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
        ])
        t = Table(data, colWidths=[U*0.62, U*0.38], repeatRows=1)
        t.setStyle(ts)
        return t

    story.extend(sub("Profile 1 — Budget Nomad"))
    story.append(P(f"Solo freelancer or early-stage digital nomad operating on tight margins in {CITY['name']}. "
                   "Shared accommodation, public transport, home cooking, occasional coworking day passes.", BODS))
    story.append(SP(5))
    p1 = [
        ("Accommodation — shared room / coliving",    CITY.get("rent_coliving","N/A")),
        ("Utilities (proportional share)",            CITY.get("util_electricity","N/A")),
        ("Home Internet (proportional)",              CITY.get("internet_cost","N/A")),
        ("Mobile Plan",                               CITY.get("mobile_20gb","N/A")),
        ("Groceries",                                 CITY.get("grocery_solo_budget","N/A")),
        ("Dining Out (2–3× per week)",                "Budget estimate"),
        (f"Public Transport — {CITY.get('transport_pass_name','pass')}", CITY.get("transport_pass","N/A")),
        ("Coworking — occasional day passes",         "Budget estimate"),
        ("Entertainment & Leisure",                   "Budget estimate"),
        ("Health Insurance (basic private)",          CITY.get("health_insurance_basic","N/A")),
        ("Miscellaneous / Contingency (≈ 8%)",        "Included in total"),
    ]
    story.append(budget_tbl(p1, f"{CITY['budget_nomad_low']} – {CITY['budget_nomad_high']}"))
    story.append(SP(14))

    story.extend(sub("Profile 2 — Standard Remote Professional"))
    story.append(P(f"Mid-career remote professional earning {CITY['currency_sym']}3,000–6,000/month net. "
                   f"Private 1BR apartment in {CITY['name']}, dedicated coworking, regular dining out.", BODS))
    story.append(SP(5))
    p2 = [
        ("1BR Apartment — outside centre",            CITY.get("rent_1br_outside","N/A")),
        ("Utilities (electricity, water, gas)",       CITY.get("util_total","N/A")),
        ("Home Fiber Internet",                       CITY.get("internet_cost","N/A")),
        ("Mobile Plan (unlimited)",                   CITY.get("mobile_unlimited","N/A")),
        ("Groceries",                                 CITY.get("grocery_solo_std","N/A")),
        ("Dining Out (4–5× per week)",                "Mid-range estimate"),
        ("Public Transport + occasional rideshare",   CITY.get("transport_pass","N/A")),
        ("Coworking — dedicated desk",                CITY.get("cowork_dedicated","N/A")),
        ("Gym Membership",                            CITY.get("gym_chain","N/A")),
        ("Entertainment & Culture",                   CITY.get("entertainment_monthly","N/A")),
        ("Health Insurance (standard private)",       CITY.get("health_insurance_basic","N/A")),
        ("Travel — short trips (monthly provision)",  "Provision estimate"),
        ("Miscellaneous / Contingency (≈ 10%)",       "Included in total"),
    ]
    story.append(budget_tbl(p2, f"{CITY['budget_std_low']} – {CITY['budget_std_high']}"))
    story.append(SP(14))

    story.extend(sub("Profile 3 — Premium Lifestyle Expat"))
    story.append(P(f"Senior executive or relocating family with international schooling requirements in {CITY['name']}. "
                   "2–3BR prime apartment, vehicle, domestic help, premium services.", BODS))
    story.append(SP(5))
    p3 = [
        ("2–3BR Apartment — prime district",          CITY.get("rent_2br_centre","N/A")),
        ("Utilities — full household",                CITY.get("util_total","N/A")),
        ("Home Internet + premium bundle",            CITY.get("internet_cost","N/A")),
        ("Mobile Plans — 2 lines, premium",           CITY.get("mobile_unlimited","N/A")),
        ("Groceries (premium supermarket)",           CITY.get("grocery_couple_std","N/A")),
        ("Dining Out — daily incl. drinks",           "Premium estimate"),
        ("Car — fuel, insurance, parking",            CITY.get("transport_car_total","N/A")),
        ("Private Office / Premium Coworking",        CITY.get("cowork_private","N/A")),
        ("Boutique Gym + Fitness Classes",            CITY.get("gym_boutique","N/A")),
        ("Entertainment, Culture & Nightlife",        "Premium estimate"),
        ("Comprehensive International Health Cover",  CITY.get("health_insurance_intl","N/A")),
        ("Domestic Help — part-time cleaner",         "Market estimate"),
        ("International School — 1 child (monthly)", CITY.get("school_monthly","N/A")),
        ("Travel & International Flights",            "Premium provision"),
        ("Miscellaneous / Contingency (≈ 10%)",       "Included in total"),
    ]
    story.append(budget_tbl(p3, f"{CITY['budget_premium_low']} – {CITY['budget_premium_high']}"))
    story.append(PageBreak())

def add_neighborhoods():
    story.extend(section_hdr("Neighborhood Analysis", "05"))
    story.append(P(f"Evaluation of key districts in {CITY['name']} across rental economics, "
                   "lifestyle character, infrastructure quality, and demographic fit."))
    story.append(SP(8))

    for nb in CITY.get("neighborhoods", []):
        story.append(KeepTogether([
            HR(LT_TEAL, 0.5), SP(4),
            P(nb["name"], H2),
            P(f"<i>District Type:  {nb['type']}</i>",
              PS('dt', fontSize=8.5, fontName='Helvetica-Oblique', textColor=MID_GREY, leading=13)),
            SP(5),
        ]))
        r_data = [["","1-Bedroom (monthly)","2-Bedroom (monthly)"],
                  ["Rental Range", nb["rent_1br"], nb["rent_2br"]]]
        story.append(tbl(r_data, [U*0.35, U*0.325, U-U*0.35-U*0.325]))
        story.append(SP(6))
        story.append(P(f"<b>Character &amp; Vibe —</b> {nb['vibe']}", BODS))
        story.append(SP(5))

        n_rows = max(len(nb.get("pros",[])), len(nb.get("cons",[])))
        pc_data = [["Strengths","Limitations"]]
        for i in range(n_rows):
            pro_txt = f"+ {nb['pros'][i]}" if i < len(nb.get("pros",[])) else ""
            con_txt = f"— {nb['cons'][i]}" if i < len(nb.get("cons",[])) else ""
            pc_data.append([
                Paragraph(pro_txt, PS(f'pro{i}', fontSize=8, leading=12, textColor=GRN)),
                Paragraph(con_txt, PS(f'con{i}', fontSize=8, leading=12, textColor=RED)),
            ])
        pc_ts = TableStyle([
            ('BACKGROUND',    (0,0), (-1,0),  TEAL),
            ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
            ('ROWBACKGROUNDS',(0,1), (-1,-1), [WHITE, LT_GREY]),
            ('VALIGN',        (0,0), (-1,-1), 'TOP'),
            ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#D5DCE4')),
            ('TOPPADDING',    (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('LEFTPADDING',   (0,0), (-1,-1), 8),
            ('RIGHTPADDING',  (0,0), (-1,-1), 8),
        ])
        pc_t = Table(pc_data, colWidths=[U/2, U/2])
        pc_t.setStyle(pc_ts)
        story.append(pc_t)
        story.append(SP(5))
        story.append(P(f"<b>Best For —</b>  {nb.get('best_for','')}", BODS))
        story.append(SP(10))
    story.append(PageBreak())

def add_infra():
    story.extend(section_hdr("Work Infrastructure & Digital Readiness", "06"))
    story.append(P(f"Scorecard assessing {CITY['name']}'s operational environment for remote workers and digital professionals."))
    story.append(SP(8))

    infra_sc = CITY.get("infra_scores", {})
    infra_nt = CITY.get("infra_notes", {})
    W = [140, 45, 30, U-140-45-30]
    hdr = [Paragraph("Category",CTBCW), Paragraph("Score",CTBCW),
           Paragraph("/10",CTBCW), Paragraph("Justification",CTBCW)]
    data_rows = [hdr]
    for cat, sc in infra_sc.items():
        sc_col = score_color(sc)
        data_rows.append([
            Paragraph(cat, CTB),
            Paragraph(f"<b>{sc}</b>", PS(f'isc{cat[:3]}', fontSize=13, fontName='Helvetica-Bold',
                                          textColor=sc_col, alignment=TA_CENTER, leading=17)),
            Paragraph("/ 10", PS(f'is2{cat[:3]}', fontSize=7.5, textColor=MID_GREY,
                                  alignment=TA_CENTER, leading=11)),
            Paragraph(infra_nt.get(cat,""), CT),
        ])
    ts3 = TableStyle([
        ('BACKGROUND',    (0,0), (-1,0),  NAVY),
        ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
        ('ROWBACKGROUNDS',(0,1), (-1,-1), [WHITE, LT_GREY]),
        ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
        ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#D5DCE4')),
        ('TOPPADDING',    (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING',   (0,0), (-1,-1), 8),
        ('RIGHTPADDING',  (0,0), (-1,-1), 8),
    ])
    it = Table(data_rows, colWidths=W, repeatRows=1)
    it.setStyle(ts3)
    story.append(it)
    story.append(PageBreak())

def add_qol():
    story.extend(section_hdr("Safety & Quality of Life", "07"))
    story.append(P(f"Objective assessment of day-to-day resident wellbeing in {CITY['name']} across seven critical dimensions."))
    story.append(SP(8))

    qol_sc = CITY.get("qol_scores", {})
    qol_nt = CITY.get("qol_notes", {})
    W = [130, 50, U-130-50]
    hdr = [Paragraph("Dimension",CTBCW), Paragraph("Score",CTBCW), Paragraph("Analysis",CTBCW)]
    data_rows = [hdr]
    for dim, sc in qol_sc.items():
        data_rows.append([
            Paragraph(f"<b>{dim}</b>", CTB),
            Paragraph(f"<b>{sc}/10</b>", PS(f'qs{dim[:3]}', fontSize=11, fontName='Helvetica-Bold',
                                              textColor=score_color(sc), alignment=TA_CENTER, leading=15)),
            Paragraph(qol_nt.get(dim,""), CT),
        ])
    ts4 = TableStyle([
        ('BACKGROUND',    (0,0), (-1,0),  NAVY),
        ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
        ('ROWBACKGROUNDS',(0,1), (-1,-1), [WHITE, LT_GREY]),
        ('VALIGN',        (0,0), (-1,-1), 'TOP'),
        ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#D5DCE4')),
        ('TOPPADDING',    (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING',   (0,0), (-1,-1), 8),
        ('RIGHTPADDING',  (0,0), (-1,-1), 8),
    ])
    qt = Table(data_rows, colWidths=W, repeatRows=1)
    qt.setStyle(ts4)
    story.append(qt)
    story.append(PageBreak())

def add_comparison():
    story.extend(section_hdr("City Comparison — Peer Cities", "08"))
    story.append(P(f"{CITY['name']} benchmarked against four peer relocation destinations."))
    story.append(SP(8))

    story.extend(sub("8.1  Monthly Rent — 1-Bedroom City Centre"))
    W1 = [115, 115, 80, U-115-115-80]
    r1 = [["City","Monthly Rent","vs. Subject City","Notes"]]
    for p in CITY.get("peers",[]):
        r1.append([p["city"], p["rent_1br"], p["vs_rent"],
                   "Subject city" if p.get("is_subject") else p.get("visa","")])
    story.append(tbl(r1, W1))
    story.append(SP(10))

    story.extend(sub("8.2  Monthly Food Cost — Solo, Mid-Range Lifestyle"))
    r2 = [["City","Monthly Food Cost","vs. Subject City","Notes"]]
    for p in CITY.get("peers",[]):
        r2.append([p["city"], p["food_monthly"], p["vs_food"],
                   "Subject city" if p.get("is_subject") else p.get("visa","")])
    story.append(tbl(r2, W1))
    story.append(SP(10))

    story.extend(sub("8.3  Overall Monthly Cost — Standard Professional Profile"))
    W3 = [115, 100, 70, 80, U-115-100-70-80]
    r3 = [["City","Monthly Total","vs. Subject","LCA Score","Visa Ease"]]
    for p in CITY.get("peers",[]):
        r3.append([p["city"], p["total_std"], p["vs_total"], p["tripcost"], p["visa"]])
    story.append(tbl(r3, W3))
    story.append(PageBreak())

def add_pros_cons():
    story.extend(section_hdr("Pros & Cons Summary", "09"))
    story.append(P(f"Balanced synthesis of the core findings for {CITY['name']} {CITY['year']}."))
    story.append(SP(8))

    story.extend(sub("Strengths"))
    pd = [["Strength","Analysis"]]
    for s, a in CITY.get("pros",[]):
        pd.append([P(f"<b>{s}</b>", CTB), P(a, CT)])
    pts = TableStyle([
        ('BACKGROUND',    (0,0), (-1,0),  HexColor('#1A5C32')),
        ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
        ('ROWBACKGROUNDS',(0,1), (-1,-1), [WHITE, HexColor('#F0FFF4')]),
        ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#A9DFBF')),
        ('TOPPADDING',    (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('LEFTPADDING',   (0,0), (-1,-1), 8),
        ('RIGHTPADDING',  (0,0), (-1,-1), 8),
        ('VALIGN',        (0,0), (-1,-1), 'TOP'),
    ])
    pt = Table(pd, colWidths=[145, U-145], repeatRows=1)
    pt.setStyle(pts)
    story.append(pt)
    story.append(SP(10))

    story.extend(sub("Limitations"))
    cd = [["Limitation","Analysis"]]
    for c, a in CITY.get("cons",[]):
        cd.append([P(f"<b>{c}</b>", CTB), P(a, CT)])
    cts = TableStyle([
        ('BACKGROUND',    (0,0), (-1,0),  HexColor('#922B21')),
        ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
        ('ROWBACKGROUNDS',(0,1), (-1,-1), [WHITE, HexColor('#FEF9F9')]),
        ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#F1948A')),
        ('TOPPADDING',    (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('LEFTPADDING',   (0,0), (-1,-1), 8),
        ('RIGHTPADDING',  (0,0), (-1,-1), 8),
        ('VALIGN',        (0,0), (-1,-1), 'TOP'),
    ])
    ct2 = Table(cd, colWidths=[145, U-145], repeatRows=1)
    ct2.setStyle(cts)
    story.append(ct2)
    story.append(PageBreak())

def add_who():
    story.extend(section_hdr("Who Should Move?", "10"))
    story.append(P(f"Segmented evaluation across five key demographic and professional categories for {CITY['name']}."))
    story.append(SP(8))

    color_map = {"green": GRN, "teal": TEAL, "amber": AMBER, "red": RED}
    W = [120, 60, U-120-60]
    hdr = [Paragraph("Profile",CTBCW), Paragraph("Verdict",CTBCW), Paragraph("Rationale",CTBCW)]
    data_rows = [hdr]
    for seg, verdict, col, rat in CITY.get("who",[]):
        vc = color_map.get(col, TEAL)
        data_rows.append([
            Paragraph(f"<b>{seg}</b>", CTB),
            verdict_badge(verdict, vc),
            Paragraph(rat, CT),
        ])
    ts5 = TableStyle([
        ('BACKGROUND',    (0,0), (-1,0),  NAVY),
        ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
        ('ROWBACKGROUNDS',(0,1), (-1,-1), [WHITE, LT_GREY]),
        ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
        ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#D5DCE4')),
        ('TOPPADDING',    (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING',   (0,0), (-1,-1), 8),
        ('RIGHTPADDING',  (0,0), (-1,-1), 8),
    ])
    wt = Table(data_rows, colWidths=W, repeatRows=1)
    wt.setStyle(ts5)
    story.append(wt)
    story.append(PageBreak())

def add_risks():
    story.extend(section_hdr("Risk Factors & Economic Outlook", "11"))
    story.append(P(f"Structured risk assessment for {CITY['name']}-based international residents as of {CITY['year']}."))
    story.append(SP(8))

    color_map = {"red": RED, "amber": AMBER, "teal": TEAL, "green": GRN}
    W = [140, 68, U-140-68]
    hdr = [Paragraph("Risk Factor",CTBCW), Paragraph("Level",CTBCW), Paragraph("Assessment",CTBCW)]
    data_rows = [hdr]
    for name, level, col, analysis in CITY.get("risks",[]):
        lc = color_map.get(col, AMBER)
        data_rows.append([
            Paragraph(f"<b>{name}</b>", CTB),
            level_badge(level, lc),
            Paragraph(analysis, CT),
        ])
    ts6 = TableStyle([
        ('BACKGROUND',    (0,0), (-1,0),  NAVY),
        ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
        ('ROWBACKGROUNDS',(0,1), (-1,-1), [WHITE, LT_GREY]),
        ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
        ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#D5DCE4')),
        ('TOPPADDING',    (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING',   (0,0), (-1,-1), 8),
        ('RIGHTPADDING',  (0,0), (-1,-1), 8),
    ])
    rt = Table(data_rows, colWidths=W, repeatRows=1)
    rt.setStyle(ts6)
    story.append(rt)
    story.append(PageBreak())

def add_methodology():
    story.extend(section_hdr("LCA Index Methodology", "12"))
    story.append(P("The LCA Index is a proprietary composite scoring framework providing "
                   "standardized, comparable relocation intelligence across global cities."))
    story.append(SP(8))

    story.extend(sub("Dimension Definitions & Weightings"))
    md = [
        ["Dimension","Weight","Primary Data Sources","Key Sub-Indicators"],
        ["Affordability","30 %","Numbeo, Eurostat / local equivalents, listing platforms",
         "Rent-to-income ratio, food cost index, transport, utilities, PPP adjustment"],
        ["Infrastructure","20 %","ITU, ANACOM / national regulator, EF EPI",
         "Internet speed / reliability, coworking density, English proficiency"],
        ["Safety","15 %","Numbeo Safety Index, national crime data, UNODC",
         "Violent crime rate, petty crime, political stability, institutional trust"],
        ["Quality of Life","20 %","WHO air quality, Walk Score, EIU liveability index",
         "Climate comfort, walkability, healthcare, cultural richness, green space"],
        ["Economic Stability","15 %","IMF, World Bank, ECB / national central bank",
         "Inflation, GDP growth, housing market, tax policy stability, currency risk"],
    ]
    story.append(tbl(md, [100, 45, 135, U-100-45-135]))
    story.append(SP(8))

    story.extend(sub("Lisbon Score Computation"))
    idx = CITY.get("index_scores", {})
    rat = CITY.get("index_rationale", {})
    weights = {"Affordability":0.30,"Infrastructure":0.20,"Safety":0.15,"Quality of Life":0.20,"Economic Stability":0.15}
    total = sum(idx.get(k,0)*w for k,w in weights.items())

    sc_data = [["Dimension","Weight","Score","Contribution","Rationale"]]
    for dim, w in weights.items():
        sc = idx.get(dim, 0)
        sc_data.append([dim, f"{int(w*100)} %", f"{sc}/10", f"{sc*w:.2f}", rat.get(dim,"")])
    sc_data.append(["COMPOSITE INDEX SCORE","100 %","—",f"{total:.2f}/10",
                    "STRONG BUY" if total >= 7 else "MODERATE"])

    wrapped = []
    for i, row in enumerate(sc_data):
        if i == 0:
            wrapped.append([Paragraph(c, CTBCW) for c in row])
        elif i == len(sc_data)-1:
            wrapped.append([Paragraph(row[0], CTNV), Paragraph(row[1], CTBC),
                             Paragraph(row[2], CTBC), Paragraph(row[3], CTGD),
                             Paragraph(row[4], CTBC)])
        else:
            wrapped.append([Paragraph(row[0], CTB), Paragraph(row[1], CTC),
                             Paragraph(row[2], CTC), Paragraph(row[3], CTC),
                             Paragraph(row[4], CT)])
    sc_ts = TableStyle([
        ('BACKGROUND',    (0,0), (-1,0),  NAVY),
        ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
        ('ROWBACKGROUNDS',(0,1), (-1,-2), [WHITE, LT_GREY]),
        ('BACKGROUND',    (0,-1),(-1,-1), GOLD),
        ('LINEABOVE',     (0,-1),(-1,-1), 1.5, NAVY),
        ('GRID',          (0,0), (-1,-1), 0.25, HexColor('#D5DCE4')),
        ('TOPPADDING',    (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('LEFTPADDING',   (0,0), (-1,-1), 7),
        ('RIGHTPADDING',  (0,0), (-1,-1), 7),
        ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
    ])
    sct = Table(wrapped, colWidths=[120,42,55,60,U-120-42-55-60], repeatRows=1)
    sct.setStyle(sc_ts)
    story.append(sct)
    story.append(PageBreak())

def add_verdict():
    story.extend(section_hdr("Final Verdict", "13"))
    story.append(P(f"Living Cost Atlas's assessment of {CITY['name']} as a {CITY['year']} relocation destination."))
    story.append(SP(10))

    idx = CITY.get("index_scores", {})
    weights = {"Affordability":0.30,"Infrastructure":0.20,"Safety":0.15,"Quality of Life":0.20,"Economic Stability":0.15}
    total = sum(idx.get(k,0)*w for k,w in weights.items())
    classification = "SOLID / STRONG BUY" if total >= 7.5 else ("MODERATE / CONSIDER" if total >= 6.5 else "CAUTION / EVALUATE")

    hero = [[
        Paragraph("LCA Index", PS('hl1', fontSize=9, fontName='Helvetica-Bold', textColor=LT_TEAL, alignment=TA_CENTER)),
        Paragraph("Classification", PS('hl2', fontSize=9, fontName='Helvetica-Bold', textColor=LT_TEAL, alignment=TA_CENTER)),
        Paragraph("Recommendation", PS('hl3', fontSize=9, fontName='Helvetica-Bold', textColor=LT_TEAL, alignment=TA_CENTER)),
    ],[
        Paragraph(f"<b>{total:.2f}<br/><font size='10'>out of 10</font></b>",
                  PS('hv1', fontSize=26, fontName='Helvetica-Bold', textColor=GOLD, alignment=TA_CENTER, leading=34)),
        Paragraph(f"<b>{classification}</b>",
                  PS('hv2', fontSize=12, fontName='Helvetica-Bold', textColor=WHITE, alignment=TA_CENTER, leading=18)),
        Paragraph("<b>PROCEED<br/>WITH PLANNING</b>",
                  PS('hv3', fontSize=14, fontName='Helvetica-Bold', textColor=WHITE, alignment=TA_CENTER, leading=20)),
    ]]
    hero_ts = TableStyle([
        ('BACKGROUND',    (0,0), (-1,-1), NAVY),
        ('BACKGROUND',    (0,0), (0,-1),  HexColor('#0D2137')),
        ('LINEBELOW',     (0,0), (-1,0),  1.5, GOLD),
        ('LINERIGHT',     (0,0), (1,-1),  1, TEAL),
        ('TOPPADDING',    (0,0), (-1,-1), 14),
        ('BOTTOMPADDING', (0,0), (-1,-1), 14),
        ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
        ('BOX',           (0,0), (-1,-1), 2, GOLD),
    ])
    hero_t = Table(hero, colWidths=[U/3, U/3, U/3])
    hero_t.setStyle(hero_ts)
    story.append(hero_t)
    story.append(SP(14))

    for title, (body_text, rec) in [
        ("For Remote Workers & Digital Nomads",   CITY.get("verdict_nomads",   ("",""))) ,
        ("For Families & Long-Term Settlers",     CITY.get("verdict_families", ("",""))),
        ("For Investors & Business Founders",     CITY.get("verdict_founders", ("",""))),
    ]:
        story.append(P(title, H2))
        story.append(P(body_text))
        verdict_box = [[Paragraph(rec, PS('vbox', fontSize=9, fontName='Helvetica-Bold',
                                           textColor=NAVY, leading=14))]]
        vt = Table(verdict_box, colWidths=[U])
        vt.setStyle(TableStyle([
            ('BACKGROUND',  (0,0),(-1,-1), HexColor('#FEF9E7')),
            ('LINEABOVE',   (0,0),(-1,-1), 2, GOLD),
            ('LINEBELOW',   (0,0),(-1,-1), 2, GOLD),
            ('TOPPADDING',  (0,0),(-1,-1), 9),
            ('BOTTOMPADDING',(0,0),(-1,-1),9),
            ('LEFTPADDING', (0,0),(-1,-1), 12),
            ('RIGHTPADDING',(0,0),(-1,-1), 12),
        ]))
        story.append(vt)
        story.append(SP(10))

    story.extend(sub("Closing Perspective"))
    story.append(P(CITY.get("closing_statement", f"{CITY['name']} offers a distinctive relocation opportunity for internationally mobile professionals.")))
    story.append(SP(14))
    story.append(HR())
    story.append(SP(8))

    disc_data = [[Paragraph(
        f"<b>Disclaimer:</b>  This report has been prepared by Living Cost Atlas Research for informational "
        f"purposes only. All cost estimates are based on Q4 {int(CITY['year'])-1}–Q1 {CITY['year']} market data and are subject to "
        "change without notice. This document does not constitute legal, tax, or financial advice. Readers "
        "are advised to conduct independent verification and consult qualified professionals before making "
        "any relocation decisions. Living Cost Atlas Research accepts no liability for decisions made in reliance "
        "on this report. Unauthorized reproduction is prohibited.",
        PS('disc', fontSize=7.5, fontName='Helvetica-Oblique', textColor=MID_GREY, leading=12))]]
    disc_t = Table(disc_data, colWidths=[U])
    disc_t.setStyle(TableStyle([
        ('BACKGROUND',    (0,0),(-1,-1), LT_GREY),
        ('TOPPADDING',    (0,0),(-1,-1), 10),
        ('BOTTOMPADDING', (0,0),(-1,-1), 10),
        ('LEFTPADDING',   (0,0),(-1,-1), 12),
        ('RIGHTPADDING',  (0,0),(-1,-1), 12),
        ('BOX',           (0,0),(-1,-1), 0.5, MID_GREY),
    ]))
    story.append(disc_t)
    story.append(SP(8))
    story.append(P(f"© {CITY['year']} Living Cost Atlas Research.  All rights reserved.",
                   PS('copy', fontSize=8, textColor=MID_GREY, alignment=TA_CENTER)))

# ── RUN ───────────────────────────────────────────────────────────────────────
add_cover()
add_toc()
add_exec()
add_facts()
add_costs()
add_budgets()
add_neighborhoods()
add_infra()
add_qol()
add_comparison()
add_pros_cons()
add_who()
add_risks()
add_methodology()
add_verdict()

city_slug = CITY["name"].replace(" ","_").replace(",","")
OUTPUT = f"/mnt/user-data/outputs/LivingCostAtlas_{city_slug}_{CITY['year']}_2026.pdf"
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)

doc = SimpleDocTemplate(
    OUTPUT, pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=20*mm, bottomMargin=17*mm,
    title=f"Living Cost Atlas — {CITY['name']} {CITY['year']} Cost of Living & Relocation Report",
    author="Living Cost Atlas Research",
    subject=f"Relocation Intelligence — {CITY['name']}, {CITY['country']} — {CITY['year']}",
    creator="Living Cost Atlas Research",
)
doc.build(story, onFirstPage=page_router, onLaterPages=page_router)
sz = os.path.getsize(OUTPUT)
print(f"SUCCESS  {OUTPUT}")
print(f"Size: {sz/1024:.0f} KB")
