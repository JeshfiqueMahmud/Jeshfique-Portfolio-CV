import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, X, Check, Code, ShieldCheck } from 'lucide-react';
import { OP_CODES_DEMO } from '../data/portfolioData';

interface OpcodeTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OpcodeTerminal: React.FC<OpcodeTerminalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(0);
  const [customCommand, setCustomCommand] = useState<string>('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'Bitcoin Core [v26.0.0-smc-custom] EvalScript Engine initialized.',
    'Loaded Test Script: OP_DUP OP_HASH256 <PubKeyHash> OP_EQUALVERIFY OP_CHECKSIG',
    'Stack State: [0x30450221... (Signature)] [0x03a34b... (PublicKey)]'
  ]);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step < OP_CODES_DEMO.length) {
      const currentOp = OP_CODES_DEMO[step];
      setTerminalLogs((prev) => [
        ...prev,
        `> EXECUTING OPCODE: ${currentOp.opcode}`,
        `  Info: ${currentOp.description}`,
        `  Stack -> [${currentOp.stackState.join(', ')}]`
      ]);
      setStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setTerminalLogs([
      'Bitcoin Core [v26.0.0-smc-custom] EvalScript Engine initialized.',
      'Loaded Test Script: OP_DUP OP_HASH256 <PubKeyHash> OP_EQUALVERIFY OP_CHECKSIG',
      'Stack State: [0x30450221... (Signature)] [0x03a34b... (PublicKey)]'
    ]);
  };

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customCommand.trim()) return;

    const cmd = customCommand.trim().toUpperCase();
    if (cmd.startsWith('OP_')) {
      setTerminalLogs((prev) => [
        ...prev,
        `$ eval ${cmd}`,
        `[Bitcoin Core Interpreter]: Processing opcode ${cmd}... SUCCESS. Stack verified.`
      ]);
    } else if (cmd === 'HELP') {
      setTerminalLogs((prev) => [
        ...prev,
        `$ ${cmd}`,
        'Available Opcodes: OP_DUP, OP_HASH256, OP_EQUALVERIFY, OP_CHECKSIG, OP_SHA256, OP_SEGWIT_VERIFY',
        'Type "RESET" to restart standard P2PKH script execution.'
      ]);
    } else if (cmd === 'RESET' || cmd === 'CLEAR') {
      handleReset();
    } else {
      setTerminalLogs((prev) => [
        ...prev,
        `$ ${cmd}`,
        `Executed custom C++ EvalScript debug hook for opcode "${cmd}".`
      ]);
    }
    setCustomCommand('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-xs text-slate-200">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-slate-400 font-sans font-medium text-xs flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              SMC Labs — Bitcoin Core Script Debugger (EvalScript/VerifyScript)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content Logs */}
        <div className="p-4 h-72 overflow-y-auto space-y-2 bg-slate-950/90 text-emerald-400 font-mono leading-relaxed select-text">
          {terminalLogs.map((log, index) => (
            <div key={index} className={log.startsWith('>') ? 'text-amber-300 font-semibold' : log.startsWith('$') ? 'text-cyan-300' : 'text-slate-300'}>
              {log}
            </div>
          ))}
          {step >= OP_CODES_DEMO.length && (
            <div className="p-2.5 my-2 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SCRIPT EXECUTION VALIDATED! Transaction witness signature is TRUE.</span>
            </div>
          )}
        </div>

        {/* Control Bar & Command Input */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={handleNextStep}
                disabled={step >= OP_CODES_DEMO.length}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-sans font-semibold text-xs transition-all shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Step Opcode ({step}/{OP_CODES_DEMO.length})
              </button>

              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-sans text-xs border border-slate-700 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Stack
              </button>
            </div>

            <span className="text-[11px] text-slate-500 font-sans">
              Modified Bitcoin Core Interpreter Simulation
            </span>
          </div>

          {/* Interactive Command Form */}
          <form onSubmit={handleRunCommand} className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
            <span className="text-emerald-400 font-bold">$</span>
            <input
              type="text"
              value={customCommand}
              onChange={(e) => setCustomCommand(e.target.value)}
              placeholder="Type opcode (e.g. OP_SHA256, OP_SEGWIT, or 'help')..."
              className="w-full bg-transparent text-emerald-300 placeholder-slate-600 focus:outline-none font-mono text-xs"
            />
            <button
              type="submit"
              className="px-2.5 py-1 text-xs font-sans font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg"
            >
              Exec
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
