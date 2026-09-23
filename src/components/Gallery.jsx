import Profile from './Profile';

export default function Gallery() {
  return (
    <section style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Galeria One Piece</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        {/* Imagem 1: Luffy */}
        <Profile 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlIRWCGPXaVgqBJKCLDaUJuIbG_TKJmKigsIIPf2DD2A&s=10" 
          alt="Luffy" 
        />

        {/* Imagem 2: Zoro  */}
        <Profile 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_dMrpV1l7fRjjP_s3hTlG7rNWGIBo-TgXVFDHtM6Ag&s=10" 
          alt="Zoro" 
        />

        {/* Imagem 3: Sanji  */}
        <Profile 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGOQ6ev1_sPp20Jrt4pkf_jrql7A_1-o4xxqjx_PLJRQ&s=10" 
          alt="Sanji" 
        />
      </div>
    </section>
  );
}