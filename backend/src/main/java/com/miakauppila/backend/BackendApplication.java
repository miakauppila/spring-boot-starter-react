package com.miakauppila.backend;

import com.miakauppila.backend.model.User;
import com.miakauppila.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("Maija", "Mallikas", "maija@gmail.com"));
		this.userRepository.save(new User("Matti", "Mallinen", "mallinen@outlook.com"));
		this.userRepository.save(new User("Timo", "Testinen", "timo@gmail.com"));
	}

}
