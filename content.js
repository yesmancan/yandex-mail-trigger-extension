window.addEventListener("load", () => {
  console.log("Yandex Mail sayfası yüklendi.");
  setTimeout(() => {
    try {
      const bodyElement = document.querySelector('[class="message-list-banner-portal"]')?.nextElementSibling
      if (bodyElement) {
        bodyElement.remove();
        console.log("1. element başarıyla silindi.");
      } else {
        console.warn("1. element bulunamadı veya eksik.");
      }
    } catch (e) {
      console.error("1. element silinirken hata oluştu:", e);
    }

    try {
      const headerElement = document.querySelector(
        '[data-testid="page-layout_right-column_container"]'
      );
      if (headerElement) {
        headerElement.remove();
        console.log("2. element başarıyla silindi.");
      } else {
        console.warn("2. element bulunamadı veya eksik.");
      }
    } catch (e) {
      console.error("2. element silinirken hata oluştu:", e);
    }
  }, 1500);
});
