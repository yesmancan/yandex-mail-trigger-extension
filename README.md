# Yandex Mail Reklam Temizleyici

Bu uzantı, Brave veya Chrome tarayıcınızda **mail.yandex.com.tr** adresine girdiğinizde sayfadaki reklam alanlarını otomatik olarak siler.  
Sayfa yüklendikten sonra belirli öğeleri kontrol eder, varsa siler ve konsola bilgi mesajı yazar.

---

## 🚀 Özellikler

- Yandex Mail arayüzündeki reklam alanlarını temizler.
- Sayfa açıldığında otomatik çalışır.
- Konsol üzerinden hangi öğelerin silindiğini bildirir.

---

## 🛠️ Kurulum (Manuel Yükleme)

1. Bu projeyi bilgisayarına indir:

   ```
   git clone https://github.com/kullaniciadi/yandex-mail-reklam-temizleyici.git
   ```

   Veya ZIP olarak indirip bir klasöre çıkart.

2. Tarayıcında aşağıdaki sayfayı aç:

   ```
   brave://extensions/
   ```

   ya da

   ```
   chrome://extensions/
   ```

3. Sağ üstten **Geliştirici Modu**nu aç.

4. **Paketlenmemiş yükle** / **Load unpacked** butonuna tıkla.

5. Proje klasörünü seç.

6. Ardından [https://mail.yandex.com.tr](https://mail.yandex.com.tr) adresine gir ve F12 tuşuna basarak konsol mesajlarını görebilirsin.

---

## 📁 Dosya Yapısı

```
yandex-mail-reklam-temizleyici/
├── manifest.json
└── content.js
```

- `manifest.json`: Uzantının tarayıcıya tanıtım dosyası.
- `content.js`: Sayfa açıldığında çalışacak olan reklam temizleyici kod.

---

## 📌 Notlar

- Bu uzantı Yandex ile bağlantılı değildir.
- Sadece kişisel kullanım amaçlı geliştirilmiştir.
- Eğer Yandex arayüzünü güncellerse, seçiciler (class/id) güncellenmelidir.

---

## 📄 Lisans

Bu proje MIT lisansı ile sunulmuştur.