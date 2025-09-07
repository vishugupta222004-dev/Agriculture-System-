import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, Search, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

const DiseaseDetection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      setIsAnalyzing(true);
      // Simulate analysis
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 3000);
    }
  };

  const commonDiseases = [
    {
      name: "Bacterial Blight",
      crop: "Rice",
      symptoms: "Yellow streaks along leaf veins",
      severity: "High",
      treatment: "Copper-based fungicides, resistant varieties"
    },
    {
      name: "Powdery Mildew",
      crop: "Wheat",
      symptoms: "White powdery coating on leaves",
      severity: "Medium",
      treatment: "Sulfur-based sprays, proper ventilation"
    },
    {
      name: "Late Blight",
      crop: "Tomato",
      symptoms: "Dark spots with white fuzzy growth",
      severity: "High",
      treatment: "Fungicide application, crop rotation"
    },
    {
      name: "Leaf Spot",
      crop: "Cotton",
      symptoms: "Circular brown spots on leaves",
      severity: "Medium",
      treatment: "Remove affected leaves, fungicide spray"
    }
  ];

  const recentScans = [
    {
      id: 1,
      image: "tomato_leaf.jpg",
      result: "Healthy Plant",
      confidence: "98%",
      date: "2024-01-15",
      status: "completed"
    },
    {
      id: 2,
      image: "wheat_stem.jpg",
      result: "Rust Disease Detected",
      confidence: "89%",
      date: "2024-01-14",
      status: "completed"
    },
    {
      id: 3,
      image: "rice_leaf.jpg",
      result: "Bacterial Blight",
      confidence: "92%",
      date: "2024-01-13",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Disease Detection
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Upload plant images and detect diseases instantly with AI-powered analysis. 
              Get immediate treatment recommendations to protect your crops.
            </p>
          </div>

          {/* Upload Section */}
          <Card className="max-w-4xl mx-auto mb-12 bg-gradient-card shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                <Camera className="h-8 w-8" />
                Upload Plant Image
              </CardTitle>
              <CardDescription>
                Take a clear photo of the affected plant part for accurate diagnosis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-primary">
                      Drag and drop your image here, or click to browse
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports JPG, PNG files up to 10MB
                    </p>
                  </div>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="mt-4 max-w-xs mx-auto"
                  />
                </div>

                {selectedFile && (
                  <div className="text-center space-y-4">
                    <div className="bg-muted/30 rounded-lg p-4 max-w-sm mx-auto">
                      <p className="text-sm font-medium text-primary">Selected File:</p>
                      <p className="text-sm text-muted-foreground">{selectedFile.name}</p>
                    </div>
                    <Button 
                      variant="hero" 
                      size="lg" 
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="px-8"
                    >
                      {isAnalyzing ? (
                        <>
                          <Clock className="h-4 w-4 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Search className="h-4 w-4 mr-2" />
                          Analyze Image
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recent Scans */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Recent Scans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentScans.map((scan) => (
                <Card key={scan.id} className="bg-gradient-card hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-primary">{scan.image}</CardTitle>
                      <Badge variant="outline" className="border-primary/20">
                        {scan.confidence}
                      </Badge>
                    </div>
                    <CardDescription>{scan.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      {scan.result === "Healthy Plant" ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-harvest-orange" />
                      )}
                      <span className="font-medium text-primary">{scan.result}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Common Diseases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Common Plant Diseases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonDiseases.map((disease, index) => (
                <Card key={index} className="bg-gradient-card hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-primary">{disease.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-primary/20">
                          {disease.crop}
                        </Badge>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          disease.severity === 'High' ? 'bg-harvest-orange/20 text-harvest-orange' : 'bg-primary/20 text-primary'
                        }`}>
                          {disease.severity}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-1">Symptoms:</h4>
                      <p className="text-sm text-muted-foreground">{disease.symptoms}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-1">Treatment:</h4>
                      <p className="text-sm text-muted-foreground">{disease.treatment}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Need Expert Help?</CardTitle>
                <CardDescription>
                  Connect with agricultural experts for detailed diagnosis and treatment plans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    Consult Expert
                  </Button>
                  <Button variant="outline" size="lg">
                    View Guidelines
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiseaseDetection;