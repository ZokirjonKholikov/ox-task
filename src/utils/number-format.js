export const formatMoney = (number, decPlaces, decSep, thouSep) => {
  let $decPlaces;
  // eslint-disable-next-line no-cond-assign,no-param-reassign,no-restricted-globals
  if (isNaN(decPlaces = Math.abs(decPlaces))) {
    $decPlaces = 2;
  } else {
    $decPlaces = decPlaces;
  }
  const $decSep = typeof decSep === 'undefined' ? '.' : decSep;
  const $thouSep = typeof thouSep === 'undefined' ? ',' : thouSep;
  let $number = number;
  let j;
  const sign = $number < 0 ? '-' : '';
  // eslint-disable-next-line radix
  const i = String(parseInt($number = Math.abs(Number($number) || 0).toFixed($decPlaces)));
  // eslint-disable-next-line no-cond-assign
  j = (j = i.length) > 3 ? j % 3 : 0;

  return sign
    + (j ? i.substr(0, j) + $thouSep : '')
    + i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, `$1${$thouSep}`)
    + ($decPlaces ? $decSep + Math.abs($number - i).toFixed($decPlaces).slice(2) : '');
};
