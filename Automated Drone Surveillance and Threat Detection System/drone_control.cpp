#include <iostream>
#include <thread>
#include <chrono>

void control_drone() {
    // Mock drone control logic
    while (true) {
        std::cout << "Drone flying...\n";
        std::this_thread::sleep_for(std::chrono::seconds(5));
    }
}

int main() {
    std::thread drone_thread(control_drone);
    drone_thread.join();
    return 0;
}
