package com.esquel.emi.graphql.resolvers;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.esquel.emi.graphql.types.VisitConnection;
import com.esquel.emi.model.Pet;
import org.springframework.stereotype.Component;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Component
public class
PetResolver implements GraphQLResolver<Pet> {
    public VisitConnection visits(Pet pet) {
        return new VisitConnection(pet.getVisits());
    }
}
