package no.kodemaker.ps.dw.eventservice;

import com.yammer.dropwizard.Service;
import com.yammer.dropwizard.config.Bootstrap;
import com.yammer.dropwizard.config.Environment;
import no.kodemaker.ps.dw.eventservice.health.TemplateHealthCheck;
import no.kodemaker.ps.dw.eventservice.resources.HelloWorldResource;

/**
 * This main-class will be used by the start_server.sh script to start the server. It can also be
 * started up in the IDE, just remember to set the correct working directory and provide the expected
 * parameters: server dw-server.yml
 */
public class EventService extends Service<EventConfiguration> {

    public static void main(String[] args) throws Exception {
        new EventService().run(args);
    }

    @Override
    public void initialize(Bootstrap<EventConfiguration> bootstrap) {
        bootstrap.setName("dw-server"); // name must match the yaml config file
    }

    @Override
    public void run(EventConfiguration conf, Environment env) throws ClassNotFoundException {
        String template = conf.getTemplate();
        String defaultName = conf.getDefaultName();

        env.addResource(new HelloWorldResource(template, defaultName));
        env.addHealthCheck(new TemplateHealthCheck(template));
    }
}
