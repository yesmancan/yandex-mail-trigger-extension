window.addEventListener("load", () => {
  console.log("Yandex Mail sayfası yüklendi.");
  setTimeout(() => {
    try {
      const bodyElement = document.querySelector(
        '[class*="PageLayout-m__body--"]'
      );
      if (bodyElement && bodyElement.childNodes[1]) {
        bodyElement.childNodes[1].remove();
        console.log("1. element başarıyla silindi.");
      } else {
        console.warn("1. element bulunamadı veya eksik.");
      }
    } catch (e) {
      console.error("1. element silinirken hata oluştu:", e);
    }

    try {
      const headerElement = document.getElementById(
        "js-mail-layout-content-header"
      );
      if (headerElement && headerElement.childNodes[1]) {
        headerElement.childNodes[1].remove();
        console.log("2. element başarıyla silindi.");
      } else {
        console.warn("2. element bulunamadı veya eksik.");
      }
    } catch (e) {
      console.error("2. element silinirken hata oluştu:", e);
    }


try {
      const rightElement = document.querySelector(
        "[data-testid='page-layout_right-column_container'"
      );
      if (rightElement ) {
        rightElement.remove();
        console.log("3. element başarıyla silindi.");
      } else {
        console.warn("3. element bulunamadı veya eksik.");
      }
    } catch (e) {
      console.error("3. element silinirken hata oluştu:", e);
    }


try {
const topElement = document.querySelector('[data-testid="content-header_container"]')

      if (topElement ) {
        topElement.childNodes[1].remove();
        console.log("4. element başarıyla silindi.");
      } else {
        console.warn("4. element bulunamadı veya eksik.");
      }
    } catch (e) {
      console.error("4. element silinirken hata oluştu:", e);
    }


  }, 1500);
});
