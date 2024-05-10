// HealthInformationServer.java
import com.google.gson.Gson;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.List;

public class HealthInformationServer {
    private List<HealthRecord> healthRecords;

    public HealthInformationServer(List<HealthRecord> healthRecords) {
        this.healthRecords = healthRecords;
    }

    public void startServer() {
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
            server.createContext("/health-records", new HealthRecordHandler());
            server.setExecutor(null); // creates a default executor
            server.start();
            System.out.println("Server started on port 8000");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    class HealthRecordHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            Gson gson = new Gson();
            String jsonResponse = gson.toJson(healthRecords);
            exchange.sendResponseHeaders(200, jsonResponse.getBytes().length);
            OutputStream os = exchange.getResponseBody();
            os.write(jsonResponse.getBytes());
            os.close();
        }
    }
}
