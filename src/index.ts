
class TemplateRender {
  private strategy: RenderStrategy;
  constructor(strategy: RenderStrategy) {
      this.strategy = strategy;
  }
  public setRenderStrategy(strategy: RenderStrategy) {
      this.strategy = strategy;
  }
  public parse(data: string): object {
    const result = this.strategy.render(data);
    return result
  }
}

interface RenderStrategy {
  render(data: string): object;
}

class RenderHTML implements RenderStrategy {
  public render(data: string): object {
      // implement logic to parse string to HTML 
      const parsedData = new Object(data)
      // ...
      console.log(`Parsed ${data} to HTML`)
      return parsedData;
  }
}

class RenderPDF implements RenderStrategy {
  public render(data: string): object {
    // implement logic to parse string to PDF
    const parsedData = new Object(data)
    // ...
    console.log(`Parsed ${data} to PDF`)  
    return parsedData;
  }
}

class RenderCSV implements RenderStrategy {
  public render(data: string): object {
    // implement logic to parse string to CSV
    const parsedData = new Object(data)
    // ...
    console.log(`Parsed ${data} to CSV`)  
    return parsedData;
  }
}


const trCSV = new TemplateRender(new RenderCSV())
const trPDF = new TemplateRender(new RenderPDF())
const trHTML = new TemplateRender(new RenderHTML())

console.log("HTML Template")
trHTML.parse("bruno")
console.log("PDF Template")
trPDF.parse("bruno")
console.log("CSV Template")
trCSV.parse("bruno")