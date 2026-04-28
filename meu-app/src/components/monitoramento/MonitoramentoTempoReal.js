import { useState } from 'react';
import RealTimeMap from '../time/RealTimeMap';
import { AlertTriangle, Clock } from 'lucide-react';

export default function MonitoramentoTempoReal() {
    const [alertas, setAlertas] = useState([
        {
            id: "AL-8921",
            lat: -8.05428,
            lng: -34.8813,
            horario: '19:42',
            tipo: 'Violência Física',
            enderecoAprox: 'Boa Viagem, Recife - PE',
            status: 'pendente',
        },
        {
            id: 'AL-8920',
            lat: -8.1125,
            lng: -34.895,
            horario: '19:35',
            tipo: 'Ameaça',
            enderecoAprox: 'Jaboatão dos Guararapes - PE',
            status: 'em_atendimento',    
        },
    ]);

    const simularNovoAlerta = () => {
        const novo = {
            id: `AL-${Date.now().toString().slice(-4)}`,
            lat: -8.05 + (Math.random() - 0.5) * 0.15,
            lng: -34.88 + (Math.random() - 0.5) * 0.15,
            horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            tipo: ['Violência Psicológica', 'Violência Física', 'Ameaça', 'Violência Sexual'][Math.floor(Math.random() * 4)],
            enderecoAprox: ['Boa Viagem', 'Olinda', 'Camaragibe', 'Paulista', 'Recife Centro'][Math.floor(Math.random() * 5)] + ', PE',
            status: 'pendente',
        };

        setAlertas(prev => [novo, ...prev].slice(0.8));
    };

    return (
        <div className="h-screen w-screen overflow-hidden bg-zinc-950 text-white flex flex-col">
      {/* Header */}
      <header className="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center px-6 justify-between z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">CENTRO DE OPERAÇÕES</h1>
            <p className="text-xs text-zinc-400 -mt-1">Monitoramento em Tempo Real • Pernambuco</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 font-medium">AO VIVO</span>
          </div>
          <button
            onClick={simularNovoAlerta}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl font-medium flex items-center gap-2"
          >
            <AlertTriangle className="w-4 h-4" />
            SIMULAR NOVO ALERTA
          </button>
        </div>
      </header>

      {/* Mapa */}
      <div className="flex-1 relative">
        <RealTimeMap alertas={alertas} />

        {/* Painel lateral de alertas */}
        <div className="absolute top-6 right-6 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-3xl p-5 w-80 shadow-2xl">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" />
            Alertas Ativos
          </h3>
          <div className="space-y-3 max-h-[70vh] overflow-y-auto">
            {alertas.map((alerta) => (
              <div key={alerta.id} className="p-3 rounded-2xl border border-red-500 bg-red-950/50">
                <div className="flex justify-between text-xs">
                  <span className="font-mono">{alerta.id}</span>
                  <span>{alerta.horario}</span>
                </div>
                <p className="font-medium mt-1">{alerta.tipo}</p>
                <p className="text-xs text-zinc-400">{alerta.enderecoAprox}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="h-12 bg-zinc-900 border-t border-zinc-800 flex items-center px-6 text-xs text-zinc-400">
        Recife e Região Metropolitana • {new Date().toLocaleDateString('pt-BR')}
      </div>
    </div>
    );
}