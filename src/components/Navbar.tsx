'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import Image from "next/image"
import { isInstalled, getPublicKey, signMessage } from "@gemwallet/api"
import sdk from "@crossmarkio/sdk"
import { motion } from "framer-motion"

export function Navbar() {
  const [qrCode, setQrCode] = useState<string>("")
  const [jumpLink, setJumpLink] = useState<string>("")
  const [xrpAddress, setXrpAddress] = useState<string>("")
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const getQrCode = async () => {
    try {
      const response = await fetch("/api/auth/xumm/createpayload")
      const data = await response.json()

      // Match the structure from your API response which includes data.payload
      if (data && data.payload && data.payload.refs) {
        setQrCode(data.payload.refs.qr_png)
        setJumpLink(data.payload.next.always)

        if (isMobile) {
          window.open(data.payload.next.always, "_blank")
        }

        const ws = new WebSocket(data.payload.refs.websocket_status)

        ws.onmessage = async (e) => {
          try {
            let responseObj = JSON.parse(e.data)
            if (responseObj.signed !== null && responseObj.signed !== undefined) {
              const payload = await fetch(
                `/api/auth/xumm/getpayload?payloadId=${responseObj.payload_uuidv4}`
              )
              const payloadJson = await payload.json()
              const hex = payloadJson.payload.response.hex
              const checkSign = await fetch(`/api/auth/xumm/checksign?hex=${hex}`)
              const checkSignJson = await checkSign.json()
              setXrpAddress(checkSignJson.xrpAddress)
            }
          } catch (error) {
            console.error('WebSocket message handling error:', 
              error instanceof Error ? error.message : 'Unknown error')
          }
        }
      } else {
        console.error('Invalid response structure from XUMM API')
      }
    } catch (error) {
      console.error('Error fetching QR code:', 
        error instanceof Error ? error.message : 'Unknown error')
    }
  }

  const handleConnectGem = async () => {
    // ... existing GEM wallet connection logic
  }

  const handleConnectCrossmark = async () => {
    // ... existing Crossmark connection logic
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-700" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
            >
              SPIFFY Rewards
            </motion.h1>
          </div>
          
          <div className="flex items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-gray-800/50 text-gray-100 border-gray-700 hover:bg-gray-700 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
                >
                  Connect Wallet
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900/95 backdrop-blur-md border border-gray-700">
                <DialogHeader>
                  <DialogTitle className="text-gray-100">Connect your wallet</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Choose your preferred wallet to connect
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <Button 
                    onClick={getQrCode} 
                    className="flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-700 text-gray-100 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <Image src="/xaman.png" alt="Xaman" width={24} height={24} className="group-hover:scale-110 transition-transform" />
                    Connect with Xaman
                  </Button>
                  <Button 
                    onClick={handleConnectGem} 
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-100"
                  >
                    <Image src="/gem.png" alt="GEM" width={24} height={24} />
                    Connect with GEM
                  </Button>
                  <Button 
                    onClick={handleConnectCrossmark} 
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-100"
                  >
                    <Image src="/crossmark.png" alt="Crossmark" width={24} height={24} />
                    Connect with Crossmark
                  </Button>
                </div>
                {qrCode && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 flex flex-col items-center"
                  >
                    <div className="p-2 bg-white rounded-xl">
                      <Image src={qrCode} alt="QR Code" width={200} height={200} />
                    </div>
                    {jumpLink && (
                      <Button 
                        className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300" 
                        onClick={() => window.open(jumpLink, "_blank")}
                      >
                        Open in Xaman
                      </Button>
                    )}
                  </motion.div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  )
} 