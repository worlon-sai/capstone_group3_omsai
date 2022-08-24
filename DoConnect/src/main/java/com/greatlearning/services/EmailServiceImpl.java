package com.greatlearning.services;

import java.util.List;

import com.greatlearning.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.greatlearning.repositories.UserRepos;

@Service
public class EmailServiceImpl implements EmailService{

    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private UserRepos userRepos;

    @Override
    public void send(String subject, String message) {
    	
    	List<User> user1= userRepos.findAllByRole("admin");
    	for(User user:user1)
    	{System.out.println("this admin");
    		SimpleMailMessage simpleMailMessage=new SimpleMailMessage();
            simpleMailMessage.setFrom("doconnect657@gmail.com");
            simpleMailMessage.setTo(user.getEmail());
            simpleMailMessage.setSubject(subject);
            simpleMailMessage.setText(message);
            this.javaMailSender.send(simpleMailMessage);
            System.out.println("sent");

    	}
    }
        @Override
        public void sendusermail(String email,String subject, String message) {
        	
        	System.out.println("this user");
        	
        		SimpleMailMessage simpleMailMessage=new SimpleMailMessage();
                simpleMailMessage.setFrom("doconnect657@gmail.com");
                simpleMailMessage.setTo(email);
                simpleMailMessage.setSubject(subject);
                simpleMailMessage.setText(message);
                this.javaMailSender.send(simpleMailMessage);

        	
        	
        

        
    }
}
