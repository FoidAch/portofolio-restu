// Section Tentang: bio + foto + minat

import { KartuBrutal } from '../ui/KartuBrutal';
import { Label } from '../ui/Label';
import { profil } from '../../data/portfolio';

export function Tentang() {
  return (
    <section id="tentang" className="py-20 px-4 bg-pasir-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Label warna="laut">01</Label>
          <h2 className="font-display font-black text-3xl md:text-4xl text-laut-700">
            Tentang Saya
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* foto */}
          <KartuBrutal className="p-2 md:col-span-1" hoverLift={false}>
            <img
              src={profil.fotoUrl}
              alt={profil.nama}
              className="w-full h-64 object-cover border-2 border-laut-700"
              onError={(e) => {
                // fallback ke placeholder kalau foto belum di-upload
                (e.currentTarget as HTMLImageElement).style.background = '#f0d49a';
                (e.currentTarget as HTMLImageElement).src =
                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23f0d49a"/><text x="50%25" y="50%25" text-anchor="middle" font-family="monospace" font-size="14" fill="%230a3a5c">FOTO BELUM DI-UPLOAD</text></svg>';
              }}
            />
          </KartuBrutal>

          {/* bio */}
          <KartuBrutal className="p-6 md:col-span-2" warnaLatar="bg-pasir-50">
            <p className="font-mono-tight text-sm text-laut-500 mb-2">
              {profil.status}
            </p>
            <p className="font-display text-lg text-laut-700 leading-relaxed">
              {profil.bio}
            </p>

            <div className="mt-6">
              <p className="font-mono-tight text-xs uppercase text-laut-500 tracking-widest mb-3">
                Minat
              </p>
              <div className="flex flex-wrap gap-2">
                {profil.minatan.map(m => (
                  <Label key={m} warna="pasir">{m}</Label>
                ))}
              </div>
            </div>

            <p className="font-mono-tight text-xs text-laut-500 mt-6">
              📍 {profil.lokasi}
            </p>
          </KartuBrutal>
        </div>
      </div>
    </section>
  );
}