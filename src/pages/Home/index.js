import React from 'react';
import dadosiniciais from '../../data/dados_iniciais.json';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{background:"#141414"}}>
      <Menu />

      <BannerMain 
        videoTitle={dadosiniciais.categorias[0].videos[0].titulo}
        url={dadosiniciais.categorias[0].videos[0].url}
        videoDescription={"What is Front-End? Working as a fron-end developer"}
        />
      
      <Carousel 
        ignoreFirstVideo
        category={dadosiniciais.categorias[0]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosiniciais.categorias[1]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosiniciais.categorias[2]}
      />
    </div>
  );
}

export default Home;