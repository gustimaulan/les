import { FAQ } from "../utils/FAQ"

function Faq() {

    return (
        <section id='faq'>
            <div className="border-y py-8 mb-4">
            <h2 className="text-3xl font-bold py-4">FAQ<span className="text-2xl"> (Pertanyaan Yang Sering Diajukan)</span></h2>
            <ul>
                {FAQ.map((item, i) => (
                    <li key={i}>
                        <div className="bg-orange-50 text-xl mb-2 p-4 rounded-lg border border-gray-400">
                            <p className="font-bold mb-1">▶️ {item.que}</p>
                            <p>{item.ans}</p>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </section>
    )
}

export default Faq