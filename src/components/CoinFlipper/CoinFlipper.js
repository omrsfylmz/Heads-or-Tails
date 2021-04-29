import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: 'tura',
      flipping: false,
      totalFlip: 0,
      tura: 0,
      yazi: 0,
    };
  }
  randomFlip = () => {
    const flip = Math.floor(Math.random() * 10);

    if (flip <= 5) {
      this.setState({ side: 'tura', tura: (this.state.tura += 1) });
    } else {
      this.setState({ side: 'yazi', yazi: (this.state.yazi += 1) });
    }
  };
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    this.setState({ totalFlip: (this.state.totalFlip += 1) });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    this.randomFlip();
  };

  render() {
    return (
      <div className='CoinFlipper'>
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.totalFlip} </strong>
          atıştan
          <strong> {this.state.tura} </strong>ü tura
          <strong> {this.state.yazi} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
