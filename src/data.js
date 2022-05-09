import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
    name: 'Lose Her Way',
    cover:
      'https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg',
    artist: 'C Y G N',
    audio: 'https://mp3.chillhop.com/serve.php/?mp3=31589',
    color: ['#2D9932', '#7E9D92'],
    id: uuidv4(),
    active: true,
    },
    {
      name: 'Timelapse',
      cover:
        'https://chillhop.com/wp-content/uploads/2022/03/7a886841c0f684c40ae9a6d1abd0c30f72269977-1024x1024.jpg',
      artist: 'Kissamilé',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=32885',
      color: ['#3e4974', '#c52f4c'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Street Glow',
      cover:
        'https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg',
      artist: 'Kreatev',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=28973',
      color: ['#80BAD3', '#FFE1CC'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'The End',
      cover:'https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg',
      artist: 'Philanthrope, Fujitsu',
      audio:'https://mp3.chillhop.com/serve.php/?mp3=8518',
      color: ['#5664b5','#e8bb84'],
      id:uuidv4(),
      active: true,
  },
  {
      name: 'Under the City Stars',
      cover:'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio:'https://mp3.chillhop.com/serve.php/?mp3=10074',
      color: ['#02283a','#fcbf70'],
      id:uuidv4(),
      active: false,
  },
  {
      name: 'Fox',
      cover:'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
      artist: 'Swørn',
      audio:'https://mp3.chillhop.com/serve.php/?mp3=9224',
      color: ['#b83674','#733469'],
      id:uuidv4(),
      active: false,
  },
  {
      name: 'Train Ride',
      cover:'https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg',
      artist: 'Nymano, Philanthrope',
      audio:'https://mp3.chillhop.com/serve.php/?mp3=10140',
      color: ['#564f81','#906a91'],
      id:uuidv4(),
      active: false,
  },
  {
      name: 'Snug',
      cover:'https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg',
      artist: 'Aso',
      audio:'https://mp3.chillhop.com/serve.php/?mp3=8567',
      color: ['#250e27','#e58285'],
      id:uuidv4(),
      active: false,
  },
  {
      name: 'Cambria',
      cover:'https://chillhop.com/wp-content/uploads/2020/07/50758f405d2aba9cd6e8c4e6cfce44e4d9893714-1024x1024.jpg',
      artist: 'Ian Ewing',
      audio:'https://mp3.chillhop.com/serve.php/?mp3=8785',
      color: ['#c85c5d','#302f64'],
      id:uuidv4(),
      active: false,
  },
  {
      name: 'What Was Before',
      cover:'https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg',
      artist: 'Philanthrope, Leavv',
      audio:'https://mp3.chillhop.com/serve.php/?mp3=9923',
      color: ['#335293','#ac6e7d'],
      id:uuidv4(),
      active: false,
  }
  ];
}

export default chillHop;
