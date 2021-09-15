export const normalizePhone = (phone) => {
  const $phone = phone.replace(/[^\d]/g, '');
  if ($phone.length === 12) {
    return $phone.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');
  }
  return '';
};
