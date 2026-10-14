# 🌟 Eternal Production - Visual Asset Portal

Modern, şık ve güvenli görsel yönetim ve CDN link portalı. Bu portal sayesinde projenize yüklenen tüm görseller otomatik olarak taranır, listelenir ve doğrudan kullanılabilecek üretim bağlantıları (`https://photograph.eternalproduction.net/<dosya-adı>`) oluşturulur.

---

## 🚀 Özellikler

- **🔒 Güvenli Yönetim Paneli**: Şifre doğrulaması tarayıcı üzerinde kriptografik **SHA-256** özeti ile gerçekleştirilir. Düz metin şifre kodlar içerisinde saklanmaz.
- **⚡ Otomatik Görsel Tarama**: Ana dizine yüklenen tüm görseller (`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`, `.bmp`) otomatik olarak algılanır.
- **🔗 Otomatik URL Üretimi & Kopyalama**: Yüklenen her görsel için (örneğin `gissy.jpg`), otomatik olarak `https://photograph.eternalproduction.net/gissy.jpg` adresi üretilir. Görsel kartının altındaki **"Kopyala"** butonuna basılarak link anında panoya aktarılır.
- **🛠️ Hızlı Araçlar**: Her görsel için tek tıkla HTML `<img>` etiketi veya Markdown bağlantısı kopyalama imkanı.
- **🔎 Anlık Arama ve Filtreleme**: Görsel adına göre anında arama yapabilme.
- **🖼️ Lightbox (Tam Ekran İnceleme)**: Görsellere tıklayarak yüksek çözünürlüklü önizleme.
- **📱 Premium Tasarım**: Dark mode, cam efekti (glassmorphic UI), özel animasyonlar ve şık bildirimler (toast notification).

---

## 📁 Proje Yapısı

```
.
├── build.js              # Görselleri tarayıp images.json ve images.js üreten derleme betiği
├── index.html            # Admin giriş ve görsel galeri arayüzü
├── images.json           # Taranan görsellerin JSON listesi
├── images.js             # İnternet bağlantısı/CORS kısıtlamalarında alternatif statik veri
├── package.json          # Proje yapılandırması ve npm derleme komutları
├── vercel.json           # Vercel dağıtım ayarları
└── README.md             # Kullanım ve kurulum rehberi
```

---

## 🛠️ Kullanım Rehberi

### 1. Yeni Görsel Ekleme
Yalnızca yeni görsel dosyanızı (örneğin `gissy.jpg`) projenin ana dizinine yükleyin.

### 2. Görsel Listesini Güncelleme
Terminalde şu komutu çalıştırın:
```bash
npm run build
```
veya
```bash
node build.js
```
Bu komut ana dizindeki tüm görselleri tarar ve `images.json` ile `images.js` dosyalarını otomatik olarak günceller.

### 3. Siteye Erişim ve Bağlantı Kopyalama
1. `index.html` sayfasını açın.
2. Yönetim paneline giriş yapın.
3. Yüklediğiniz görsel varsayılan olarak listelenecektir.
4. Görselin altındaki **Kopyala** butonuna tıklayarak `https://photograph.eternalproduction.net/<dosya-adı>` bağlantısını kopyalayabilirsiniz.

---

## 🔒 Güvenlik
- Yönetim paneli şifresi SHA-256 özeti ile doğrulanmaktadır.
- Oturum bilgisi tarayıcının yerel depolamasında (`localStorage`) güvenli bir şekilde muhafaza edilir.

---

## 🌐 Dağıtım (Vercel)
Proje Vercel ile tam uyumludur. Repository'yi Vercel'e bağladığınızda `cleanUrls` ayarı ile doğrudan yayına alınır.

---
© **Eternal Production** - Tüm Hakları Saklıdır.
