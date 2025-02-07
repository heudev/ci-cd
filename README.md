# Node.js CI/CD Demo Projesi

Bu proje, CI/CD süreçlerini öğrenmek için oluşturulmuş basit bir Node.js uygulamasıdır.

## Proje Yapısı

- `src/app.js`: Ana uygulama dosyası
- `src/app.test.js`: Test dosyası
- `Dockerfile`: Container yapılandırması
- `docker-compose.yml`: Container orkestrasyon yapılandırması
- `.github/workflows/ci-cd.yml`: GitHub Actions CI/CD pipeline yapılandırması

## Kurulum

1. Projeyi klonlayın:

```bash
git clone [repo-url]
cd nodejs-cicd-demo
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Uygulamayı başlatın:

```bash
npm start
```

## Docker ile Çalıştırma

```bash
docker-compose up --build
```

## CI/CD Kurulumu

1. GitHub repository'nizde aşağıdaki secret'ları oluşturun:

   - `SSH_PRIVATE_KEY`: VM'e bağlanmak için SSH özel anahtarı
   - `VM_HOST`: Google Cloud VM'inizin IP adresi
   - `VM_USERNAME`: VM kullanıcı adı

2. VM'de SSH anahtarı kurulumu:
   - Public SSH anahtarınızı VM'in `~/.ssh/authorized_keys` dosyasına ekleyin
   - VM'de Docker ve Docker Compose'un kurulu olduğundan emin olun

## Test

```bash
npm test
```

## Endpoints

- `GET /`: Karşılama mesajı
- `GET /health`: Sağlık kontrolü
