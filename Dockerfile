# 1) Base image: Node.js (Alpine: hafif)
FROM node:20-alpine

# 2) Çalışma dizini
WORKDIR /app

# 3) Sadece dependency dosyalarını kopyala
COPY package.json package-lock.json* ./

# 4) Prod ortam için temiz kurulum
RUN npm ci

# 5) Geri kalan her şeyi kopyala
COPY . .

# 6) Next.js production build
RUN npm run build

# 7) Production ortam değişkeni
ENV NODE_ENV=production

# 8) Next.js varsayılan portu
EXPOSE 3000

# 9) Uygulamayı başlat (package.json'da "start": "next start" olmalı)
CMD ["npm", "run", "start"]
