// this function to converted first charachter to uppercase while keeping the rest of the string unchanged
const firstUp = (s:string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
// this function to to formate number
function formatPrice(price:number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// this function to strip HTML tags
const stripHtmlTags = (html: string): string => {
  if (!html) return "";
  if (typeof document !== 'undefined') {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }
  return html.replace(/<[^>]+>/g, "");
};
export {
  firstUp,formatPrice,stripHtmlTags}