import React, { useState } from 'react';
import { ArrowLeft, Printer } from 'lucide-react';

export default function Checkout({ socket }) {
  const [total, setTotal] = useState(125.50);
  const [valuePaid, setValuePaid] = useState(0);
  const [change, setChange] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('dinheiro');

  const handlePayment = () => {
    const changeAmount = valuePaid - total;
    if (changeAmount >= 0) {
      setChange(changeAmount);
      // TODO: Processar pagamento
      console.log('Pagamento processado');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <button className="flex items-center gap-2 mb-8 text-blue-400 hover:text-blue-300">
          <ArrowLeft size={20} />
          Voltar
        </button>

        {/* Checkout Form */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-8">Fechar Conta - Mesa 5</h1>

          {/* Items */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Itens do Pedido</h2>
            <div className="bg-gray-700 p-4 rounded space-y-2">
              <div className="flex justify-between">
                <span>Frango à Parmesana x2</span>
                <span>R$ 70,00</span>
              </div>
              <div className="flex justify-between">
                <span>Cerveja x2</span>
                <span>R$ 36,00</span>
              </div>
              <div className="flex justify-between">
                <span>Sorvete x1</span>
                <span>R$ 15,00</span>
              </div>
              <div className="border-t border-gray-600 pt-2 mt-2 flex justify-between font-bold">
                <span>TOTAL</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Forma de Pagamento</h2>
            <div className="grid grid-cols-2 gap-4">
              {['dinheiro', 'credito', 'debito', 'pix'].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`p-3 rounded font-bold capitalize ${
                    paymentMethod === method
                      ? 'bg-blue-600'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Payment Values */}
          <div className="mb-8 space-y-4">
            <div>
              <label className="block text-sm mb-2">Valor Total</label>
              <input
                type="number"
                value={total.toFixed(2)}
                disabled
                className="w-full bg-gray-700 p-3 rounded text-lg"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Valor Pago</label>
              <input
                type="number"
                value={valuePaid}
                onChange={(e) => setValuePaid(parseFloat(e.target.value) || 0)}
                className="w-full bg-gray-700 p-3 rounded text-lg"
              />
            </div>
            {change > 0 && (
              <div>
                <label className="block text-sm mb-2">Troco</label>
                <input
                  type="number"
                  value={change.toFixed(2)}
                  disabled
                  className="w-full bg-green-700 p-3 rounded text-lg font-bold"
                />
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handlePayment}
              className="flex-1 bg-green-600 hover:bg-green-700 p-4 rounded font-bold text-lg"
            >
              Processar Pagamento
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded flex items-center gap-2">
              <Printer size={20} />
              Imprimir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
