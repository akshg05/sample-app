// To parse this data:
//
//   import { Convert, SearchEntity } from "./file";
//
//   const searchEntity = Convert.toSearchEntity(json);

export interface SearchEntity {
    id:               string;
    search_id:        string;
    scheme_search:    string;
    scheme_name:      string;
    scheme_code:      string;
    bse_scrip_code:   null;
    title:            string;
    bse_scrip_group:  string;
    page_views:       number;
    normalized_views: null;
    entity_type:      string;
    search_string:    string;
    tags:             null;
    isin:             string;
    fund_name:        string;
    tiker:            null;
    company_status:   string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSearchEntity(json: string): SearchEntity {
        return JSON.parse(json);
    }

    public static searchEntityToJson(value: SearchEntity): string {
        return JSON.stringify(value);
    }
}