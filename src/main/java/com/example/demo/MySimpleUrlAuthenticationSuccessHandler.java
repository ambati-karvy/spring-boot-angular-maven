/*package com.example.demo;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;


@Component
public class MySimpleUrlAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
	
	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
	
	@SuppressWarnings("unlikely-arg-type")
	@Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
        //do some logic here if you want something to be done whenever
        //the user successfully logs in.
 
        HttpSession session = httpServletRequest.getSession();
        User authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        
        System.out.println(authentication);
        session.setAttribute("username", authUser.getName());
        session.setAttribute("email", authUser.getEmail());
        session.setAttribute("authorities", authentication.getAuthorities());
        //session.setAttribute("authorities", authentication.getAuthorities());
 
        //set our response to OK status
        httpServletResponse.setStatus(HttpServletResponse.SC_OK);
        //httpServletResponse.sendRedirect("/api/dashboard");
        List<String> l1= new ArrayList<>();
       
        
        if(authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
        	redirectStrategy.sendRedirect(httpServletRequest, httpServletResponse, "/api/dashboard");
        } else {
        	redirectStrategy.sendRedirect(httpServletRequest, httpServletResponse, "/user/api/dashboard");
        }
        
        //redirectStrategy.sendRedirect(httpServletRequest, httpServletResponse, "/api/dashboard");
    }
}
*/