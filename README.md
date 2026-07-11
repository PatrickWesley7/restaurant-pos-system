# 🍽️ Sistema POS para Restaurante

Sistema de Ponto de Venda (POS) completo e integrado para restaurante com 40 mesas, funcionando em desktop (caixa) e mobile (garçons).

## ✨ Funcionalidades Principais

- ✅ Gestão de **40 mesas**
- ✅ Cardápio completo (pratos e bebidas)
- ✅ **Pedidos em tempo real** (garçom ↔ caixa)
- ✅ Cálculo automático de contas
- ✅ **Cálculo de troco**
- ✅ **Impressão de contas** (cliente)
- ✅ **Impressão de notas fiscais**
- ✅ Fechamento de caixa diário
- ✅ Relatório de faturamento
- ✅ Sincronização em tempo real

## 🏗️ Arquitetura

```
restaurant-pos-system/
├── backend/              # API Node.js + Express
├── web/                  # Sistema Caixa (React)
├── mobile/               # App Garçons (React Native)
└── docs/                 # Documentação
```

## 🛠️ Stack Tecnológico

| Camada | Tecnologia |
|--------|-----------|
| **Backend API** | Node.js + Express.js + PostgreSQL |
| **Desktop (Caixa)** | React + TypeScript + Tailwind CSS |
| **Mobile (Garçons)** | React Native + Expo |
| **Comunicação** | Socket.io (real-time) |
| **Impressão** | ESC/POS (impressoras térmicas) |
| **Autenticação** | JWT |

## 📱 Plataformas Suportadas

- **Desktop/Caixa**: Windows, Linux, macOS
- **Garçons**: iOS e Android

## 🚀 Quickstart

### Backend
```bash
cd backend
npm install
npm run dev
```

### Web (Caixa)
```bash
cd web
npm install
npm start
```

### Mobile (Garçons)
```bash
cd mobile
npm install
npx expo start
```

## 📊 Estrutura de Dados

### Principais Tabelas
- **Mesas** (40 unidades)
- **Produtos** (pratos e bebidas)
- **Pedidos** (histórico completo)
- **Itens de Pedido**
- **Pagamentos**
- **Caixa** (fechamento diário)
- **Usuários** (garçons, caixas)

## 📝 Documentação

Ver mais detalhes em `/docs`:
- Configuração do banco de dados
- Estrutura da API
- Guia de uso do sistema

## 👥 Autor

Patrick Wesley - PatrickWesley7

## 📄 Licença

MIT
