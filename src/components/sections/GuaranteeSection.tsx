import seloGarantia from "@/assets/selo-garantia.png";

export const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img 
              src={seloGarantia} 
              alt="Selo de Garantia 7 Dias" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Garantia Total de{" "}
                <span className="text-accent">7 Dias</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experimente nossa biblioteca completa por 7 dias. Se não ficar 100% satisfeito, 
                devolvemos seu dinheiro sem perguntas. Simples assim!
              </p>
              
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                <p className="text-sm text-accent font-semibold">
                  ✅ Risco ZERO para você • Satisfação garantida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};