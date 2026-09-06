// Section Perjalanan: timeline vertikal ala brutalism

import { KartuBrutal } from '../ui/KartuBrutal';
import { Label } from '../ui/Label';
import { pengalaman } from '../../data/portfolio';

const jenisWarna: Record<string, 'laut' | 'koral' | 'palma' | 'pasir'> = {
  pendidikan: 'laut',
  belajar:    'palma',
  organisasi: 'koral',
  kerja:      'koral',
};

const jenisLabel: Record<string, string> = {
  pendidikan: 'Pendidikan',
  belajar:    'Belajar',
  organisasi: 'Organisasi',
  kerja:      'Kerja',
};

export function Perjalanan() {
  return (
    <section id="perjalanan" className="py-20 px-4 bg-pasir-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Label warna="laut">04</Label>
          <h2 className="font-display font-black text-3xl md:text-4xl text-laut-700">
            Perjalanan
          </h2>
        </div>

        <div className="relative pl-8 md:pl-12">
          {/* garis vertikal */}
          <div className="absolute left-3 md:left-5 top-2 bottom-2 w-1 bg-laut-700" />

          <div className="space-y-8">
            {pengalaman.map(item => (
              <div key={item.id} className="relative">
                {/* dot di timeline */}
                <div className="absolute -left-[1.45rem] md:-left-[1.95rem] top-6 w-5 h-5 bg-koral-500 border-brutal border-laut-700" />

                <KartuBrutal className="p-5" warnaLatar="bg-pasir-50">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Label warna={jenisWarna[item.jenis] ?? 'laut'}>
                      {jenisLabel[item.jenis] ?? item.jenis}
                    </Label>
                    <span className="font-mono-tight text-xs text-laut-500">
                      {item.tahun}
                    </span>
                  </div>
                  <h3 className="font-mono-tight font-bold text-xl text-laut-700">
                    {item.peran}
                  </h3>
                  <p className="font-mono-tight text-sm text-laut-500 mb-3">
                    @ {item.tempat}
                  </p>
                  <p className="font-display text-laut-700 leading-relaxed">
                    {item.cerita}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {item.sorotan.map(s => (
                      <li
                        key={s}
                        className="font-display text-sm text-laut-700 flex gap-2"
                      >
                        <span className="text-koral-500 font-bold">▸</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                  {item.teknologi && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.teknologi.map(t => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-mono-tight bg-pasir-200 text-laut-700 border-2 border-laut-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </KartuBrutal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}