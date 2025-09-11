import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Briefcase, Brain, Target } from "lucide-react";
import pairicoImg from "@/assets/pairico.png";
import domilaoImg from "@/assets/domilaoaomilhao.png";
import os7habitosImg from "@/assets/os7habitos.png";
import quempensaImg from "@/assets/quempensa.png";

const benefits = [
  {
    icon: TrendingUp,
    title: "FINANÇAS",
    description: "Desvende os segredos da riqueza. Aprenda a psicologia do dinheiro, estratégias de gestão financeira inteligente e os caminhos para a verdadeira liberdade econômica.",
    highlight: "De \"Pai Rico, Pai Pobre\" a \"Os Segredos da Mente Milionária\"",
    images: [pairicoImg]
  },
  {
    icon: Briefcase,
    title: "INVESTIMENTOS & EMPREENDEDORISMO",
    description: "Transforme suas ideias em lucro. Explore as modalidades de investimento mais rentáveis, desde a segurança da renda fixa até o dinamismo da renda variável.",
    highlight: "Insights valiosos de empreendedores de sucesso",
    images: [domilaoImg]
  },
  {
    icon: Target,
    title: "CARREIRA & LIDERANÇA",
    description: "Conquiste o topo. Desenvolva habilidades de liderança, proatividade e responsabilidade pessoal com mestres como Stephen Covey.",
    highlight: "\"Os 7 Hábitos das Pessoas Altamente Eficazes\"",
    images: [os7habitosImg]
  },
  {
    icon: Brain,
    title: "MENTALIDADE DE SUCESSO",
    description: "Reprograme sua mente para a vitória. Construa uma mentalidade resiliente, focada e imparável, capaz de superar qualquer desafio.",
    highlight: "\"Quem Pensa Enriquece\" e \"O Poder do Hábito\"",
    images: [quempensaImg]
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            O Segredo dos Vencedores ao{" "}
            <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
              Alcance dos Seus Ouvidos
            </span>
          </h2>
          <div className="bg-accent/15 border border-accent/30 rounded-2xl p-6 max-w-4xl mx-auto mb-8">
            <p className="text-2xl md:text-3xl font-bold text-accent mb-4">
              🎧 200 AUDIOBOOKS BEST-SELLERS
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Cuidadosamente selecionados para impulsionar sua mentalidade e 
              multiplicar suas finanças. Este não é apenas um pacote de áudios; é um atalho para o seu 
              crescimento pessoal e profissional.
            </p>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            O Que Você Vai Desbloquear:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-card/80 backdrop-blur-sm hover:scale-105 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 gradient-accent rounded-2xl group-hover:shadow-glow transition-smooth">
                    <benefit.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Book Images */}
                {benefit.images.length > 0 && (
                  <div className="flex gap-3 justify-center mb-4">
                {benefit.images.map((image, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={image} 
                        alt={`Livro ${benefit.title}`}
                        className="h-48 w-auto object-contain rounded-lg shadow-md transform hover:scale-105 transition-smooth"
                      />
                    ))}
                  </div>
                )}
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                <p className="text-sm font-semibold text-accent bg-accent/10 p-3 rounded-lg border border-accent/20">
                  {benefit.highlight}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};