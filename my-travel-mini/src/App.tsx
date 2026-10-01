import { useState } from 'react'

type Spot = {
  id: number
  name: string
  category: string
  description: string
}

const initialSpots: Spot[] = [
  { id: 1, name: 'Biển Mỹ Khê', category: 'Biển', description: 'Bãi biển nổi tiếng giữa lòng Đà Nẵng.' },
  { id: 2, name: 'Bà Nà Hills', category: 'Núi', description: 'Cầu Vàng và làng Pháp trên đỉnh núi.' },
  { id: 3, name: 'Phố cổ Hội An', category: 'Phố cổ', description: 'Đèn lồng và phố đi bộ buổi tối.' },
  { id: 4, name: 'Chợ Hàn', category: 'Ẩm thực', description: 'Thiên đường quà vặt và đặc sản.' },
  { id: 5, name: 'Ngũ Hành Sơn', category: 'Núi', description: 'Quần thể núi đá vôi và chùa chiền.' },
  { id: 6, name: 'Mì Quảng Bà Mua', category: 'Ẩm thực', description: 'Quán mì Quảng địa phương được yêu thích.' },
]

export default function App() {
  const [spots, setSpots] = useState<Spot[]>(initialSpots)
  const [query, setQuery] = useState('')
  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('')

  const filtered = spots.filter(
    s =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase()),
  )

  const addSpot = () => {
    if (!newName.trim()) return
    setSpots([
      ...spots,
      { id: Date.now(), name: newName, category: newCategory || 'Khác', description: 'Địa điểm do mình thêm.' },
    ])
    setNewName('')
    setNewCategory('')
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-emerald-700">🌏 Mini Travel Spots</h1>
        <p className="mt-1 text-sm text-slate-500">
          Dự án luyện tay — React + Vite + Tailwind, deploy lên Vercel.
        </p>

        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Tìm theo tên hoặc loại..."
          className="mt-4 w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <div className="mt-3 flex gap-2">
          <input
            value={newName}
            onChange={e => setNewName(e.target.value)}
            placeholder="Tên địa điểm mới"
            className="flex-1 rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            value={newCategory}
            onChange={e => setNewCategory(e.target.value)}
            placeholder="Loại (Biển, Núi...)"
            className="w-40 rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            onClick={addSpot}
            className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
          >
            Thêm
          </button>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-8 text-center text-slate-400">Không tìm thấy địa điểm nào 😅</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filtered.map(spot => (
              <div key={spot.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-slate-800">{spot.name}</h2>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">
                    {spot.category}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{spot.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}