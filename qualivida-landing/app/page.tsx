import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Building2,
  Shield,
  Car,
  Lightbulb,
  Headphones,
  Briefcase,
  Star,
  Clock,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function QualividaLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/qualivida-logo.png"
                alt="Qualivida Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-orange-500 font-medium">
                Início
              </Link>
              <Link href="#salas" className="text-gray-700 hover:text-orange-500 font-medium">
                Salas
              </Link>
              <Link href="#localizacao" className="text-gray-700 hover:text-orange-500 font-medium">
                Localização
              </Link>
              <Link href="#contato" className="text-gray-700 hover:text-orange-500 font-medium">
                Contato
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <span className="font-medium">(11) 4433-2200</span>
              </div>
              <Button className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white font-semibold">
                Agende sua Visita
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-yellow-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-yellow-400 to-red-500 text-white mb-4">Localização Premium</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Salas Comerciais Premium em São Caetano do Sul
              </h1>
              <p className="text-xl text-gray-600 mb-8">O Ambiente Ideal para Seu Sucesso Profissional</p>
              <p className="text-lg text-gray-700 mb-8">
                Localize sua empresa no coração de São Caetano do Sul. Salas modernas, infraestrutura completa e
                localização privilegiada na Av. Tijucussú.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Localização estratégica no Olímpico</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Infraestrutura completa e moderna</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Flexibilidade de contratos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Estacionamento disponível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Segurança 24h</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white font-semibold px-8 py-3"
              >
                Conheça Nossas Salas
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Prédio Qualivida"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slider de Salas */}
      <section id="salas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossas Salas Disponíveis</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o espaço perfeito para o seu negócio. Todas as salas incluem infraestrutura completa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Sala Executiva */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Sala Executiva"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Executiva</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sala Executiva</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gray-600">25m²</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">Até 4 pessoas</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Mesa de reunião</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Ar-condicionado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Internet fibra óptica</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">R$ 1.200</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <Button className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white">
                    Agendar Visita
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sala Premium */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Sala Premium"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white">
                  Premium
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sala Premium</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gray-600">40m²</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">Até 8 pessoas</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Recepção integrada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Sala de espera</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Banheiro privativo</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">R$ 1.800</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <Button className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white">
                    Agendar Visita
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que escolher a Qualivida */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O Que Faz da QUALIVIDA a Melhor Escolha para Seu Negócio?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Localização Premium</h3>
              <p className="text-gray-600">No coração de São Caetano do Sul, com fácil acesso às principais vias</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Segurança Total</h3>
              <p className="text-gray-600">Sistema de monitoramento 24h e controle de acesso</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Estacionamento Incluso</h3>
              <p className="text-gray-600">Vagas garantidas para você e seus clientes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Infraestrutura Completa</h3>
              <p className="text-gray-600">Internet de alta velocidade, ar-condicionado e mobília opcional</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Suporte Dedicado</h3>
              <p className="text-gray-600">Equipe sempre disponível para atender suas necessidades</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexibilidade</h3>
              <p className="text-gray-600">Contratos adaptáveis ao seu crescimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Localização Estratégica em São Caetano do Sul
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sua empresa no endereço certo! Nossa sede na Av. Tijucussú oferece acesso rápido às principais rodovias
                e está cercada de comércios, restaurantes e serviços essenciais.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <span className="text-gray-700">Av. Tijucussú, 400 - Olímpico, São Caetano do Sul - SP</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Shopping ABC</h4>
                  <p className="text-sm text-gray-600">5 min</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Estação de trem</h4>
                  <p className="text-sm text-gray-600">10 min</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Bancos e agências</h4>
                  <p className="text-sm text-gray-600">2 min</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Restaurantes</h4>
                  <p className="text-sm text-gray-600">1 min</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Mapa do Google</p>
                <p className="text-sm text-gray-400">Av. Tijucussú, 400 - Olímpico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Agende sua Visita e Conheça o Espaço Ideal para seu Negócio
            </h2>
            <p className="text-lg text-gray-600">
              Preencha o formulário e nossa equipe entrará em contato em até 2 horas
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de sala de interesse</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Selecione uma opção</option>
                      <option>Sala Executiva (25m²)</option>
                      <option>Sala Premium (40m²)</option>
                      <option>Ainda não sei</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem (opcional)</label>
                  <Textarea placeholder="Conte-nos mais sobre suas necessidades..." rows={4} />
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white font-semibold py-3">
                  Quero Agendar uma Visita
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Profissionais Bem-Sucedidos Já Escolheram a QUALIVIDA
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "A localização é perfeita para meu escritório de advocacia. Meus clientes sempre comentam sobre a
                  facilidade de acesso e o ambiente profissional."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dr. Carlos Silva</h4>
                    <p className="text-sm text-gray-600">Advogado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Infraestrutura completa e suporte excepcional. A QUALIVIDA entende as necessidades de um consultor
                  empresarial."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ana Rodrigues</h4>
                    <p className="text-sm text-gray-600">Consultora Empresarial</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Espaço moderno e flexível, ideal para receber clientes. A segurança 24h me dá total tranquilidade."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Arq. Pedro Santos</h4>
                    <p className="text-sm text-gray-600">Arquiteto</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dúvidas Frequentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Qual o valor do aluguel e o que está incluso?
                </h3>
                <p className="text-gray-600">
                  Os valores variam de R$ 1.200 a R$ 1.800 mensais, incluindo internet de alta velocidade,
                  ar-condicionado, limpeza, segurança 24h e uma vaga de estacionamento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Há período mínimo de contrato?</h3>
                <p className="text-gray-600">
                  Oferecemos flexibilidade com contratos a partir de 12 meses, com possibilidade de renovação e
                  adaptação conforme seu crescimento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">É possível personalizar a sala?</h3>
                <p className="text-gray-600">
                  Sim! Você pode personalizar sua sala com sua identidade visual, mobiliário adicional e layout conforme
                  suas necessidades profissionais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tem estacionamento para clientes?</h3>
                <p className="text-gray-600">
                  Sim, temos vagas de estacionamento disponíveis para seus clientes, além da vaga inclusa no aluguel da
                  sala.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Como funciona a segurança do prédio?</h3>
                <p className="text-gray-600">
                  Contamos com sistema de monitoramento 24h, controle de acesso por cartão, portaria com recepcionista e
                  circuito fechado de TV em todas as áreas comuns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/qualivida-logo.png"
                alt="Qualivida Logo"
                width={120}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-4">
                Salas comerciais premium em São Caetano do Sul para o seu sucesso profissional.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 4433-2200</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@qualivida.com.br</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>
                    Av. Tijucussú, 400 - Olímpico
                    <br />
                    São Caetano do Sul - SP
                    <br />
                    09540-700
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Segunda a Sexta: 8h às 18h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Sábado: 9h às 13h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Domingo: Fechado</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white">
                  Política de Privacidade
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white">
                  Termos de Uso
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white">
                  Contrato de Locação
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white">
                  Regulamento Interno
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} QUALIVIDA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
