# 📸 Upute za Dodavanje Slika

## 🗂️ Gdje Dodati Slike

### 1. **Slika Tima** (About Section)
**Putanja**: `/public/images/hero/team-photo.jpg`

**Preporuke**:
- Profesionalna fotografija tima liječnica
- Ambient: ordinacija ili prijemni prostor
- Stil: Svijetla, prirodna, topla
- Dimenzije: Minimalno 1200x800px
- Format: JPG ili WebP

---

### 2. **Fotografije Liječnica** (Team Section)
**Putanje** (3 fotografije):
- `/public/images/team/dr-vesna-harni.jpg`
- `/public/images/team/dr-snjeska-vitosevic.jpg`
- `/public/images/team/dr-tatjana-mioc-pranic.jpg`

**Preporuke**:
- Profesionalni portreti
- Bijela pozadina ili ordinacija
- Formalni medicinski look
- Kvadratne fotografije (best: 500x500px min)
- Jednake dimenzije za sve tri
- Format: JPG ili WebP

---

## 🎨 Stil Fotografija

### Generalne Smjernice:
1. **Boje**: Svijetle, topli tonovi (izbjegavati hladnu plavu)
2. **Освjetљење**: Prirodno, soft light
3. **Pozadina**: Čista, profesionalna (ordinacija ili neutral)
4. **Izraz**: Topao, profesionalan, pristupačan
5. **Odjeća**: Bijeli medicinski mantili ili profesionalna odjeća

### Profesionalnost:
- Visoka rezolucija (minimalno 1200px širina)
- Dobro osvjetljenje
- Fokus na emociju i povjerenje
- Autentično (ne stock photos)

---

## 🔧 Kako Dodati Slike

### Korak 1: Priprema
Naziv fajlova mora biti **TAČAN**:
```
team-photo.jpg
dr-vesna-harni.jpg
dr-snjeska-vitosevic.jpg
dr-tatjana-mioc-pranic.jpg
```

### Korak 2: Optimizacija (Opciono ali preporučeno)
- Smanjiti veličinu fajla (bez gubitka kvaliteta)
- Koristiti WebP format (bolji za web)
- Tools: TinyPNG, Squoosh, ImageOptim

### Korak 3: Upload
1. Otvoriti folder `public/images/`
2. Dodati slike u odgovarajuće foldere:
   - `hero/` - team-photo.jpg
   - `team/` - sve tri fotografije liječnica

---

## 📐 Tehničke Specifikacije

### Team Photo (Hero Section)
- **Aspect Ratio**: 4:3 ili 3:2
- **Min. Rezolucija**: 1200x800px
- **Max. File Size**: 500KB
- **Format**: JPG (quality 85%) ili WebP

### Doctor Portraits (Team Section)  
- **Aspect Ratio**: 1:1 (kvadrat)
- **Min. Rezolucija**: 500x500px
- **Max. File Size**: 200KB po slici
- **Format**: JPG (quality 85%) ili WebP

---

## ✅ Trenutni Status

- ✅ Placeholder struktura postavljena
- ✅ Image komponente konfigurirane
- ✅ Next.js optimizacija uključena
- ⬜ Team photo (čeka upload)
- ⬜ Dr. Vesna Harni (čeka upload)
- ⬜ Dr. Snješka Vitošević (čeka upload)
- ⬜ Dr. Tatjana Mioč-Pranić (čeka upload)

---

## 🚀 Nakon Upload-a

Kad se slike dodaju, stranica će automatski:
1. Učitati slike umjesto placeholdera
2. Optimizirati ih (Next.js Image)
3. Responsive srcset generirati
4. Lazy loading primijeniti

**Samo postavi slike u foldere i refresh stranicu!**

---

## 📞 Dodatna Pomoć

Ako imaš problema sa slikama, provjeri:
- Da li su imena fajlova tačna (lowercase, bez razmaka)
- Da li su u pravim folderima
- Da li su formati podržani (JPG, PNG, WebP)
- Dev server restartuj nakon dodavanja: `npm run dev`

