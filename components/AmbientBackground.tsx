import React from 'react';

// Fond vivant : halos vert et cyan qui dérivent lentement + grain + légère grille.
export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-[20%] left-[10%] w-[900px] h-[900px] rounded-full bg-[#2BE07A]/[0.14] blur-[160px] animate-orb-1" />
      <div className="absolute top-[35%] -right-[15%] w-[800px] h-[800px] rounded-full bg-[#18B6C9]/[0.11] blur-[170px] animate-orb-2" />
      <div className="absolute -bottom-[15%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[#2BE07A]/[0.09] blur-[160px] animate-orb-3" />
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div className="absolute inset-0 bg-grain opacity-90" />
    </div>
  );
};
