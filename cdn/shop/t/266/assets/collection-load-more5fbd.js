window.initiateLoadMore=(ContainerSelector,ItemSelector)=>{const loading={show:()=>document.querySelector("#hc-loading").style.display="block",hide:()=>document.querySelector("#hc-loading").style.display="none"};document.querySelector(".load-more-products").addEventListener("click",e=>{const triggerLoad=force=>{document.querySelector("#more-link")&&!document.querySelector("body").classList.contains("loading-products")&&(target=document.querySelector("#more-link").getBoundingClientRect().top,(force||target<window.innerHeight+400)&&fetchNewProducts())};triggerLoad(!0),document.querySelector(".load-more-products").style.display="none",window.addEventListener("scroll",function(e2){triggerLoad()})});const fetchNewProducts=function(){loading.show(),console.log("[HC] Infinite Scroll: fetching...");const more=document.querySelector("#more-link"),url=more.getAttribute("href"),productsContainer=`${ContainerSelector}`,productItems=`${productsContainer} > ${ItemSelector}`;document.querySelector("body").classList.add("loading-products"),fetch(url,{method:"GET",headers:{"Content-Type":"text/html"}}).then(res=>res.text()).then(res=>{console.log("[HC] Infinite Scroll: fetched");const data=new DOMParser().parseFromString(res,"text/html"),newMore=data.querySelector("#more-link").getAttribute("href"),newProducts=data.querySelectorAll(productItems);document.querySelector(productsContainer).append(...newProducts),newProducts.forEach(item=>{item.classList.add("aos-init"),item.classList.add("aos-animate")});const event=new CustomEvent("newitems",{detail:{items:newProducts}});document.dispatchEvent(event),newMore?(console.log("[HC] Infinite Scroll: update `more` link"),more.setAttribute("href",newMore)):(document.querySelector("body").classList.remove("loading-products"),more.remove())}).catch(message=>console.error(message)).finally(()=>document.querySelector("body").classList.remove("loading-products")),loading.hide()}};
//# sourceMappingURL=/cdn/shop/t/266/assets/collection-load-more.js.map?v=108386227551015444821733836994
