import React from 'react'
import ReactDOM from 'react-dom/client'
import {ConfigProvider} from 'antd';

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider
  theme={{
    token: {
      // Seed Token
      colorPrimary: "#2F2E2E",
      // Alias Token
      colorBgContainer: "#ffffff",
    },
  }}
>
    <App />
    </ConfigProvider>
)
