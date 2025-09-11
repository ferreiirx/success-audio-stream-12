import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import feedback1 from "@/assets/feedback.jpg";
import feedback2 from "@/assets/feedback2.jpg";
import feedback3 from "@/assets/feedback3.jpg";
import feedback4 from "@/assets/feedback4.jpg";
import { useEffect, useState } from "react";

const testimonials = [
  {
    image: feedback1,
    alt: "Feedback de cliente satisfeito"
  },
  {
    image: feedback2,
    alt: "Depoimento sobre transformação de vida"
  },
  {
    image: feedback3,
    alt: "Avaliação positiva do produto"
  },
  {
    image: feedback4,
    alt: "Testemunho de sucesso"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            O Que Nossos{" "}
            <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
              Alunos Estão Dizendo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Milhares de pessoas já transformaram suas vidas com nosso acervo de audiobooks. 
            Veja o que elas têm a dizer sobre os resultados.
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 p-4">
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-elegant border border-accent/20 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-accent' 
                    : 'bg-accent/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};