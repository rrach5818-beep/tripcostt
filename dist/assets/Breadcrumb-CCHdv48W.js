import{i as e}from"./setPageMeta-Be_Dth_8.js";const c="https://www.livingcostatlas.com";function b(n){if(!n||n.length<2)return"";const a={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:n.map((t,r)=>({"@type":"ListItem",position:r+1,name:t.label,...t.href?{item:`${c}${t.href}`}:{}}))};return setTimeout(()=>e("breadcrumb-jsonld",a),0),`
    <nav class="bc" aria-label="Breadcrumb">
      <div class="container">
        <ol class="bc__list">${n.map((t,r)=>r===n.length-1?`<span class="bc__current">${t.label}</span>`:`<a href="${t.href}" data-link class="bc__link">${t.label}</a>`).join('<span class="bc__sep" aria-hidden="true">/</span>')}</ol>
      </div>
    </nav>
  `}const p=`
  .bc {
    padding: 14px 0 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  .bc__list {
    list-style: none;
    margin: 0;
    padding: 5px 12px;
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.01em;
    background: rgba(0,0,0,0.35);
    backdrop-filter: blur(6px);
    border-radius: 6px;
  }
  .bc__link {
    color: rgba(255,255,255,0.55);
    text-decoration: none;
    transition: color 0.15s;
    padding: 2px 0;
  }
  .bc__link:hover {
    color: #fff;
    text-decoration: none;
  }
  .bc__sep {
    color: rgba(255,255,255,0.25);
    margin: 0 8px;
    font-size: 11px;
    user-select: none;
  }
  .bc__current {
    color: rgba(255,255,255,0.85);
    font-weight: 600;
  }

  /* Light background variant */
  .bc--light .bc__link { color: #6b7280; }
  .bc--light .bc__link:hover { color: #111827; }
  .bc--light .bc__sep { color: #d1d5db; }
  .bc--light .bc__current { color: #111827; }
`;export{b as B,p as a};
