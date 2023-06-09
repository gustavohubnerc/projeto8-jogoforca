export default function Letras({isEnabled, letrasEscolhidas, palavraEscolhida, onLetraEscolhida, result}) {
  
  const alfabeto = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  return (
    <div className="teclado">
      {alfabeto.map((letra) => (
        <button
          data-test="letter"
          key={letra}
          className="letra"
          disabled={
            !isEnabled ||
            letrasEscolhidas.includes(letra) ||
            result !== ''
          }
          onClick={() => onLetraEscolhida(letra)}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}
