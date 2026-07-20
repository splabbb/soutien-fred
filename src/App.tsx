import React, { useState } from 'react';
import { Heart, Share2, ChevronDown, Twitter, Facebook, MessageCircle, Link, Copy, X } from 'lucide-react';

function Header({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 h-20 border-b border-surface-2 bg-canvas/80 backdrop-blur-md shrink-0 sticky top-0 z-50">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>
        <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
          <Heart className="w-6 h-6 text-ink" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-ink">Ensemble pour Fred</h1>
          <p className="text-[10px] uppercase tracking-widest text-brand-light font-semibold">Une initiative de quartier</p>
        </div>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-medium text-muted">
        <button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} className="hover:text-ink transition-colors">Accueil</button>
        <button onClick={() => { setCurrentPage('home'); setTimeout(() => { document.getElementById('histoire')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-ink transition-colors">Histoire</button>
        <button onClick={() => { setCurrentPage('home'); setTimeout(() => { document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-ink transition-colors">FAQ</button>
      </nav>
      <button onClick={() => { setCurrentPage('home'); setTimeout(() => { document.getElementById('soutenir')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="bg-brand hover:bg-brand-light text-ink px-6 py-2 rounded-full text-sm font-bold transition-all">Soutenir</button>
    </header>
  );
}

function Hero() {
  return (
    <section id="accueil" className="ember-glow py-20 md:py-28 bg-gradient-to-br from-surface to-canvas border-b border-line/40">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 bg-surface-2 border border-line text-muted-2 text-xs rounded-full">Soutien Solidaire</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-ink leading-none tracking-tighter">
            Aidons notre voisin à reprendre <span className="text-brand-light">la route.</span>
          </h1>
          <p className="text-lg text-muted italic">
            « Fred, c'est l'âme de notre quartier. Aujourd'hui c'est à nous d'être là pour lui. »
          </p>
          <p className="text-muted-2">
            Le vélo électrique de Fred a été volé à Lille. Sans assurance, il ne peut pas le remplacer. Nous, ses voisins, avons décidé d'agir pour lui redonner de la mobilité et de l'indépendance.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#soutenir" className="bg-brand hover:bg-brand-light text-ink px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center space-x-2 cta-glow hover:-translate-y-0.5 active:scale-[0.98]">
              <Heart className="w-5 h-5" />
              <span>Je participe</span>
            </a>
            <a href="#histoire" className="bg-transparent border border-line text-muted-2 px-6 py-3 rounded-full text-sm font-bold hover:bg-surface-2 transition-colors">
              L'histoire de Fred
            </a>
          </div>
          <p className="text-sm text-faint pt-2">6 donateurs | Objectif : 1 500 €</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-brand/10 blur-2xl" aria-hidden="true" />
          <img 
            src="/profile-picture.png" 
            alt="Fred" 
            className="relative rounded-3xl border border-line/60 shadow-2xl ring-1 ring-brand/10 w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 bg-canvas">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-widest text-brand-light font-semibold mb-4">Témoignages</p>
          <h2 className="text-4xl font-extrabold text-ink tracking-tighter">Le quartier témoigne</h2>
          <p className="text-muted mt-4">Parce que Fred, c'est bien plus qu'un voisin.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-surface-2/40 p-6 rounded-2xl border border-line/50 transition-all duration-300 hover:border-brand/40 hover:bg-surface-2/70 hover:-translate-y-1">
            <p className="text-sm italic text-muted-2 leading-relaxed mb-6">« Fred est toujours là pour le quartier, il livre les courses de ma mère chaque semaine. C'est à notre tour de l'aider. »</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-line flex items-center justify-center text-ink text-xs mr-4 border border-line-2">C</div>
              <div>
                <p className="font-bold text-ink text-sm">Claire D.</p>
                <p className="text-xs text-faint">2026-07-10</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-2/40 p-6 rounded-2xl border border-line/50 transition-all duration-300 hover:border-brand/40 hover:bg-surface-2/70 hover:-translate-y-1">
            <p className="text-sm italic text-muted-2 leading-relaxed mb-6">« Ce vélo, c'était sa liberté. Il allait voir sa mère à la maison de retraite tous les deux jours. On ne peut pas le laisser comme ça. »</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-ink text-xs mr-4 border border-brand-light">J</div>
              <div>
                <p className="font-bold text-ink text-sm">Jean-Pierre M.</p>
                <p className="text-xs text-faint">2026-07-12</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-2/40 p-6 rounded-2xl border border-line/50 transition-all duration-300 hover:border-brand/40 hover:bg-surface-2/70 hover:-translate-y-1">
            <p className="text-sm italic text-muted-2 leading-relaxed mb-6">« On s'est tous cotisés pour lancer la cagnotte. Fred, c'est l'âme de la rue Saint-Michel, on ne pouvait pas rester les bras croisés. »</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-line flex items-center justify-center text-ink text-xs mr-4 border border-line-2">L</div>
              <div>
                <p className="font-bold text-ink text-sm">Les voisins du 12</p>
                <p className="text-xs text-faint">2026-07-08</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const shareUrl = "https://www.leetchi.com/fr/c/urgent-aidez-fred-a-remplacer-son-velo-vole-et-a-surmonter-ses-difficultes-6874108?u=aaa031c0-7fa3-4271-94cf-019f7e8e74e7&utm_source=copylink&utm_medium=social_sharing";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Lien copié dans le presse-papiers !');
  };

  return (
    <section id="soutenir" className="ember-glow py-20 md:py-24 bg-gradient-to-br from-surface to-canvas border-y border-line/40">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-6 tracking-tighter">Prêt à donner un coup de pouce ?</h2>
        <p className="text-lg text-muted-2 mb-8 max-w-2xl mx-auto leading-relaxed">
          Il reste 1 000 € à collecter pour atteindre l'objectif. Chaque don compte, même le plus petit.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <a href="https://www.leetchi.com/fr/c/urgent-aidez-fred-a-remplacer-son-velo-vole-et-a-surmonter-ses-difficultes-6874108?u=aaa031c0-7fa3-4271-94cf-019f7e8e74e7&utm_source=copylink&utm_medium=social_sharing" target="_blank" rel="noopener noreferrer" className="bg-brand hover:bg-brand-light text-ink px-8 py-4 rounded-full text-sm font-bold flex items-center space-x-2 transition-all duration-300 cta-glow hover:-translate-y-0.5 active:scale-[0.98]">
            <Heart className="w-5 h-5" />
            <span>Supportez notre Cagnotte</span>
          </a>
          <button onClick={() => setIsShareModalOpen(true)} className="bg-transparent border border-line text-muted-2 hover:bg-surface-2 px-8 py-4 rounded-full text-sm font-bold flex items-center transition-colors">
            <Share2 className="w-5 h-5 inline-block mr-2" />
            Partager l'initiative
          </button>
        </div>
        
        <div className="flex flex-col items-center mt-12">
          <p className="text-xs text-muted font-bold mb-4 uppercase tracking-widest">Ou scannez le QR Code :</p>
          <div className="p-4 bg-white/10 backdrop-blur-sm border border-line/50 rounded-3xl shadow-xl inline-block hover:scale-105 transition-transform">
            <img src="/qr-code.png" alt="QR Code de la Cagnotte" className="w-40 h-40 rounded-xl" />
          </div>
        </div>

        <p className="text-[11px] text-faint mt-12 uppercase tracking-widest font-medium">
          Fred compte sur la solidarité de chacun. Et si c'était vous ?
        </p>
      </div>

      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-sm" onClick={() => setIsShareModalOpen(false)}>
          <div className="bg-surface border border-line rounded-3xl p-6 max-w-sm w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsShareModalOpen(false)} className="absolute top-4 right-4 text-muted hover:text-ink transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-ink mb-6 text-center">Partager l'initiative</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Soutenez Fred : ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-2 hover:bg-line transition-colors gap-2 text-ink">
                <MessageCircle className="w-6 h-6 text-green-500" />
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Soutenez Fred à remplacer son vélo volé !')}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-2 hover:bg-line transition-colors gap-2 text-ink">
                <Twitter className="w-6 h-6 text-blue-400" />
                <span className="text-xs font-semibold">X (Twitter)</span>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-2 hover:bg-line transition-colors gap-2 text-ink">
                <Facebook className="w-6 h-6 text-blue-600" />
                <span className="text-xs font-semibold">Facebook</span>
              </a>
              <button onClick={handleCopyLink} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-2 hover:bg-line transition-colors gap-2 text-ink">
                <Copy className="w-6 h-6 text-muted" />
                <span className="text-xs font-semibold">Copier le lien</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Story() {
  return (
    <section id="histoire" className="py-16 bg-canvas">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="/Designer.png" 
            alt="Profil de Fred" 
            className="rounded-3xl border border-line/60 shadow-2xl ring-1 ring-brand/10 w-full h-auto object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-ink tracking-tighter">Soutien à Fred</h2>
          <p className="text-muted-2 leading-relaxed text-sm">
            Fred, une personne gentille et dévouée, a toujours été un pilier pour sa communauté. Alors qu'il voyageait à Lille, 
            son vélo électrique, sa bouée de sauvetage, lui a été volé. Ce vélo n'était pas simplement un moyen de transport : 
            il était essentiel pour sa mobilité, son indépendance et sa capacité à aider les autres.
          </p>
          
          <div className="p-6 rounded-2xl bg-surface-2/40 border border-line/50 border-l-2 border-l-brand">
            <p className="text-brand-light text-xs uppercase mb-3 font-bold tracking-widest">Défis actuels</p>
            <ul className="text-sm text-muted-2 space-y-2">
              <li className="flex gap-2">
                <span className="text-brand-light">•</span>
                Il lutte contre un handicap médical.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-light">•</span>
                Le vol de son vélo l'a laissé dans une grande détresse émotionnelle et psychologique.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-light">•</span>
                Il doit encore rembourser le vélo volé et voyage désormais avec seulement un sac à dos, loin de sa ville natale.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-light">•</span>
                Il a urgemment besoin de mettre ses papiers en ordre et de se rétablir financièrement.
              </li>
            </ul>
          </div>
          
          <p className="text-muted-2 leading-relaxed text-sm">
            Nous collectons des fonds pour lui acheter un nouveau vélo et l'aider à retrouver une stabilité dans sa vie.
          </p>
        </div>
      </div>
    </section>
  );
}

function InitialSituation() {
  return (
    <section className="py-16 bg-surface border-t border-surface-2/50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tighter">Comprendre la situation initiale : le témoignage de Fred sur Booking.com</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-line/50 shadow-2xl bg-white mb-4">
            <img src="/Avis.png" alt="Témoignage de Fred" className="w-full h-auto object-contain" />
          </div>
          <p className="text-sm text-muted italic text-center leading-relaxed px-4">
            Le 12 juillet 2026, Fréd, laisse un avis dévastateur sur Booking.com après son séjour au JOST BED à Lille : son vélo électrique vient de lui être volé devant l'établissement. Note : 1/10. Ce témoignage, rédigé dans la détresse du moment, marque le point de départ de sa situation actuelle sans vélo, loin de chez lui, et sans ressources pour s'en remettre.
          </p>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-surface/40 rounded-2xl border border-line/50 overflow-hidden transition-colors hover:border-line-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center hover:bg-surface/50 transition-colors"
      >
        <span className="font-bold text-ink text-sm">{question}</span>
        <ChevronDown className={`w-5 h-5 text-brand-light transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-muted text-sm leading-relaxed border-t border-surface-2/50 mt-2">
          {answer}
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "Pourquoi cette cagnotte est-elle urgente ?",
      answer: "Fred a été victime du vol de son vélo électrique à Lille, alors qu'il n'était pas assuré. En plus de devoir continuer à rembourser ce vélo, il fait face à un handicap médical et à une grande détresse. Ce vélo était son unique moyen de transport et une bouée de sauvetage pour son autonomie."
    },
    {
      question: "À quoi serviront exactement les fonds ?",
      answer: "L'intégralité des dons servira à racheter un vélo électrique (estimé à 1 200 €), ainsi que des équipements de sécurité indispensables (antivol solide, casque, etc.) et à couvrir les frais annexes pour l'aider à se stabiliser."
    },
    {
      question: "Comment faire un don en toute sécurité ?",
      answer: (
        <>
          Vous pouvez contribuer de manière 100% sécurisée via notre cagnotte en ligne Leetchi : <a href="https://www.leetchi.com/fr/c/urgent-aidez-fred-a-remplacer-son-velo-vole-et-a-surmonter-ses-difficultes-6874108?u=aaa031c0-7fa3-4271-94cf-019f7e8e74e7&utm_source=copylink&utm_medium=social_sharing" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:underline break-words">Cliquez ici pour accéder à la cagnotte</a>. Chaque participation, même minime, fait une vraie différence.
        </>
      )
    },
    {
      question: "Comment puis-je aider autrement ?",
      answer: "Le partage est tout aussi précieux que le don financier. Diffusez le lien de la cagnotte autour de vous, sur vos réseaux sociaux, ou parlez-en dans le quartier."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-canvas">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-widest text-brand-light font-semibold mb-4">FAQ</p>
          <h2 className="text-4xl font-extrabold text-ink tracking-tighter">Foire aux questions</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <footer className="h-20 border-t border-surface-2 bg-canvas px-6 md:px-10 flex flex-col md:flex-row items-center justify-between shrink-0 py-4 gap-4">
      <div className="text-center md:text-left">
        <h3 className="font-bold text-ink mb-1 tracking-tight">Le Vélo de Fred</h3>
        <p className="text-[10px] text-faint uppercase tracking-widest font-medium">© 2026 Solidarité Fred • Lille, France</p>
      </div>
      <div className="flex gap-6 text-[10px] text-line-2 font-bold uppercase tracking-widest">
        <button onClick={() => { setCurrentPage('transparence'); window.scrollTo(0, 0); }} className="hover:text-muted cursor-pointer transition-colors uppercase tracking-widest">Transparence</button>
        <button onClick={() => { setCurrentPage('mentions'); window.scrollTo(0, 0); }} className="hover:text-muted cursor-pointer transition-colors uppercase tracking-widest">Mentions</button>
        <button onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }} className="hover:text-muted cursor-pointer transition-colors uppercase tracking-widest">Contact</button>
      </div>
    </footer>
  );
}

function Transparence() {
  return (
    <section className="py-20 bg-canvas min-h-screen">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl space-y-12">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-widest text-brand-light font-semibold mb-4">Informations</p>
          <h2 className="text-4xl font-extrabold text-ink tracking-tighter">Transparence</h2>
        </div>
        
        <div className="space-y-8 text-muted-2 text-sm leading-relaxed">
          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Utilisation des fonds</h3>
            <p>Les fonds collectés serviront exclusivement à couvrir : le remplacement du vélo électrique volé, l'achat d'équipements de sécurité de haute qualité (antivol, casque) et les besoins urgents liés aux difficultés actuelles de Fred pour l'aider à retrouver sa mobilité et son indépendance.</p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Montant cible</h3>
            <p>L'objectif de 1 500 € a été calculé sur la base du modèle de vélo adapté aux besoins de Fred (environ 1 200 €), des accessoires indispensables (200 €) et des frais administratifs ou de la cagnotte (100 €).</p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Suivi</h3>
            <p>Les donateurs seront tenus informés via les actualités de la plateforme Leetchi. Nous publierons des photos du nouveau vélo, une preuve d'achat et un message de remerciement de Fred dès que possible.</p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Ce qui ne sera pas financé</h3>
            <p>La cagnotte ne couvrira pas les dépenses non liées à la mobilité de Fred ou à ses besoins fondamentaux urgents pour se stabiliser.</p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Gestion des excédents</h3>
            <p>Si la cagnotte dépasse l'objectif fixé, les fonds supplémentaires seront reversés directement à Fred pour l'aider à surmonter ses autres difficultés médicales et personnelles actuelles.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mentions() {
  return (
    <section className="py-20 bg-canvas min-h-screen">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl space-y-12">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-widest text-brand-light font-semibold mb-4">Légal</p>
          <h2 className="text-4xl font-extrabold text-ink tracking-tighter">Mentions légales</h2>
        </div>
        
        <div className="space-y-8 text-muted-2 text-sm leading-relaxed">
          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Identité de l'organisateur</h3>
            <p>La collecte est organisée par le collectif des voisins de la rue Saint-Michel (Lille), amis et soutiens de Fred.</p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Hébergeur</h3>
            <p>La collecte financière est hébergée et gérée par Leetchi / Lemonway, prestataires de services de paiement agréés. Nous sommes uniquement les organisateurs de cette campagne.</p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Responsabilité</h3>
            <p>Cette initiative est une collecte privée solidaire. Nous ne sommes pas une association professionnelle ou caritative enregistrée. Les dons sont réalisés à titre gracieux pour soutenir un particulier.</p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Données personnelles</h3>
            <p>Nous ne collectons ni ne conservons vos données de paiement. Les informations fournies lors de la participation sont traitées conformément aux règles du RGPD par Leetchi. Nous n'utiliserons votre email que pour vous donner des nouvelles de Fred si vous avez accepté de recevoir ces mises à jour.</p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Conditions de la plateforme</h3>
            <p>Pour plus d'informations sur les paiements et le fonctionnement, veuillez consulter les <a href="https://www.leetchi.com/fr/cgu" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:underline">Conditions Générales d'Utilisation de Leetchi</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-20 bg-canvas min-h-screen">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl space-y-12">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-widest text-brand-light font-semibold mb-4">Échanger</p>
          <h2 className="text-4xl font-extrabold text-ink tracking-tighter">Contact</h2>
        </div>
        
        <div className="space-y-8 text-muted-2 text-sm leading-relaxed">
          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Email direct</h3>
            <p>Pour toute question concernant la campagne ou pour prendre des nouvelles de la situation de Fred, vous pouvez nous écrire à : <span className="text-ink font-medium">soutien.fred@mail.fr</span></p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Délai de réponse</h3>
            <p>Nous sommes des bénévoles et des voisins. Nous faisons de notre mieux pour vous répondre sous 48h.</p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Objets de contact acceptés</h3>
            <ul className="list-disc list-inside space-y-2 mt-2 text-muted">
              <li>Problèmes liés aux dons</li>
              <li>Demandes médias</li>
              <li>Offres d'aide non financière</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Ce qui n'est pas géré ici</h3>
            <p>Si vous rencontrez un problème technique lors du paiement, veuillez contacter directement le <a href="https://www.leetchi.com/fr/contact" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:underline">Support Leetchi</a>. Nous n'avons pas accès à vos informations bancaires.</p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/50 border border-line/50 transition-colors hover:border-line-2">
            <h3 className="text-xl font-bold text-ink mb-4">Réseaux sociaux</h3>
            <p>Suivez l'évolution de la situation en partageant et en commentant directement sur la page de notre cagnotte ou via nos relais locaux.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-canvas text-muted-2 font-sans selection:bg-brand-light/30">
      <Header setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Testimonials />
            <CallToAction />
            <Story />
            <InitialSituation />
            <FAQ />
          </>
        )}
        {currentPage === 'transparence' && <Transparence />}
        {currentPage === 'mentions' && <Mentions />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
