import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const entries = [
  {
    id: 'irene-gargantini',
    name: 'Irene Gargantini Strybosch',
    subtitle: 'A Short Autobiography',
    description: 'Professor Emeritus with Western University (London, Ontario), IEEE Life Member, Sponsor of the Martin Gerardus Strybosch Awards.',
    linkLabel: 'Irene Gargantini Strybosch · ICAP LONDON',
    href: 'https://www.csd.uwo.ca/about/history/the_irene_years.html',
  },
  {
    id: 'damjana-bratuz',
    name: 'Dr. Damjana Bratuz',
    subtitle: null,
    description: 'Appointed Prof. Emeritus, The University of Western Ontario June 1993. Reappointed Adjunct Research Professor in the Department of Music Performance Studies, Don Wright Faculty of Music, February 2009.',
    linkLabel: 'Dr. Damjana Bratuz · Western University',
    href: 'https://damjanabratuz.ca/',
  },
];

export default function Autobiographies() {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;
  const [viewing, setViewing] = useState(null);

  return (
    <PageLayout activePage="Autobiographies" initialOpen={{ People: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Breadcrumb */}
        <nav className="mb-4 text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
          <button onClick={() => navigate('/')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>Home</button>
          <span className="mx-1">›</span>
          <button onClick={() => navigate('/people-and-their-stories')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>People and their Stories</button>
          <span className="mx-1">›</span>
          <span style={{ color: '#432616' }}>Autobiographies</span>
        </nav>

        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Autobiographies
        </h2>

        <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        <div className="space-y-0">
          {entries.map((entry, i) => (
            <div key={entry.id}>
              <div className="py-6">
                <h3 className="font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: '#432616' }}>
                  {entry.name}
                </h3>
                {entry.subtitle && (
                  <p className="mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#5a3d28', fontStyle: 'italic' }}>
                    {entry.subtitle}
                  </p>
                )}
                <p className="mb-4 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                  {entry.description}
                </p>
                {entry.href && (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-75 transition"
                    style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}
                  >
                    › {entry.linkLabel}
                  </a>
                )}
              </div>
              {i < entries.length - 1 && (
                <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />
              )}
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
