
export function dataSelector(dataResponse) {
  const { items, total_count } = dataResponse;
  const filtered = items.map((item) => ({
    id: item.id,
    name: item.name,
    barcode: item.barcode,
    lastUpdateTime: item.lastUpdateTime,
    sku: item.sku,
    supplier: item.supplier,
    zone: item.zone,
    unit: item.unit,
  }));
  return { total: total_count, data: filtered };
}
