"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

export default function ProfessionalProfile() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-muted/20">
            <div className="relative h-80 md:h-full">
              <Image
                src="https://sjc.microlink.io/JfrESTqnx_zHAepouUTUzOJEb5x_IZgdTXuKaC82765NkFeXgPQ2t50dxXYlomLCQ0heH9KxcB3iG2Vvb1jEYg.jpeg"
                alt="Professional portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6 md:p-8">
            <CardHeader className="px-0 pt-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl font-bold">Professional Profile</CardTitle>
                  <CardDescription className="text-lg mt-1">Executive Attorney</CardDescription>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-blue-600 hover:bg-blue-700">Law</Badge>
                  <Badge className="bg-blue-600 hover:bg-blue-700">Corporate</Badge>
                  <Badge className="bg-blue-600 hover:bg-blue-700">Consulting</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-0 py-4 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">About</h3>
                <p className="text-muted-foreground">
                  With over 15 years of experience in corporate law, I specialize in mergers and acquisitions, corporate
                  governance, and complex commercial transactions. My approach combines strategic thinking with
                  practical solutions to help clients navigate challenging legal landscapes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>New York, NY</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>Available for consultations</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-0 pt-4 flex flex-wrap gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700">Schedule Consultation</Button>
              <Button variant="outline">Download CV</Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  )
}
