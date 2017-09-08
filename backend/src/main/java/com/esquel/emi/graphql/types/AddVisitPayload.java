package com.esquel.emi.graphql.types;

import com.esquel.emi.model.Visit;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class AddVisitPayload {
    private final Visit visit;

    public AddVisitPayload(Visit visit) {
        this.visit = visit;
    }

    public Visit getVisit() {
        return visit;
    }
}
