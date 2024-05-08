export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      city: {
        Row: {
          county_id: number | null
          created_at: string
          id: number
          name: string | null
          state_id: number | null
        }
        Insert: {
          county_id?: number | null
          created_at?: string
          id?: number
          name?: string | null
          state_id?: number | null
        }
        Update: {
          county_id?: number | null
          created_at?: string
          id?: number
          name?: string | null
          state_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "city_county_id_fkey"
            columns: ["county_id"]
            isOneToOne: false
            referencedRelation: "county"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "city_state_id_fkey"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          }
        ]
      }
      county: {
        Row: {
          created_at: string
          id: number
          name: string
          state_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string
          state_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          state_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "counties_state_id_fkey"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          }
        ]
      }
      matches: {
        Row: {
          created_at: string
          referral_id: string
          sold_property_id: number
        }
        Insert: {
          created_at?: string
          referral_id?: string
          sold_property_id: number
        }
        Update: {
          created_at?: string
          referral_id?: string
          sold_property_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "matches_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "referral"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_sold_property_id_fkey"
            columns: ["sold_property_id"]
            isOneToOne: false
            referencedRelation: "sales_transaction"
            referencedColumns: ["PropertyID"]
          }
        ]
      }
      referral: {
        Row: {
          county_id: number
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          track_name: string | null
        }
        Insert: {
          county_id?: number
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          track_name?: string | null
        }
        Update: {
          county_id?: number
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          track_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referral_county_id_fkey"
            columns: ["county_id"]
            isOneToOne: false
            referencedRelation: "county"
            referencedColumns: ["id"]
          }
        ]
      }
      sales_transaction: {
        Row: {
          City: string | null
          Country: string | null
          County: number | null
          CreatedAt: string | null
          DistrictGroup: number | null
          DistrictGroupDescription: string | null
          Grantee: string | null
          Grantor: string | null
          "Just Market Value": number | null
          LandUseCode: number | null
          LandUseCodeDescription: string | null
          "Legal Description": string | null
          LegalReference: string | null
          "Mailing Address": string | null
          "Mailing Address Line 2": string | null
          Owner1: string | null
          ParcelID: string | null
          PropertyID: number
          SaleDate: string | null
          SalePrice: number | null
          "Situs City": string | null
          "Situs Location": string | null
          State: string | null
          "Total Appraised Improvement Value": string | null
          "Total Appraised Land Value": string | null
          "Total Area Unit Type": string | null
          "Total Assessed Value": number | null
          "Total Taxable Value": number | null
          "Total Value Exemption": string | null
          TotalArea: string | null
          TransferBook: number | null
          TransferPage: number | null
          ZipCode: string | null
        }
        Insert: {
          City?: string | null
          Country?: string | null
          County?: number | null
          CreatedAt?: string | null
          DistrictGroup?: number | null
          DistrictGroupDescription?: string | null
          Grantee?: string | null
          Grantor?: string | null
          "Just Market Value"?: number | null
          LandUseCode?: number | null
          LandUseCodeDescription?: string | null
          "Legal Description"?: string | null
          LegalReference?: string | null
          "Mailing Address"?: string | null
          "Mailing Address Line 2"?: string | null
          Owner1?: string | null
          ParcelID?: string | null
          PropertyID: number
          SaleDate?: string | null
          SalePrice?: number | null
          "Situs City"?: string | null
          "Situs Location"?: string | null
          State?: string | null
          "Total Appraised Improvement Value"?: string | null
          "Total Appraised Land Value"?: string | null
          "Total Area Unit Type"?: string | null
          "Total Assessed Value"?: number | null
          "Total Taxable Value"?: number | null
          "Total Value Exemption"?: string | null
          TotalArea?: string | null
          TransferBook?: number | null
          TransferPage?: number | null
          ZipCode?: string | null
        }
        Update: {
          City?: string | null
          Country?: string | null
          County?: number | null
          CreatedAt?: string | null
          DistrictGroup?: number | null
          DistrictGroupDescription?: string | null
          Grantee?: string | null
          Grantor?: string | null
          "Just Market Value"?: number | null
          LandUseCode?: number | null
          LandUseCodeDescription?: string | null
          "Legal Description"?: string | null
          LegalReference?: string | null
          "Mailing Address"?: string | null
          "Mailing Address Line 2"?: string | null
          Owner1?: string | null
          ParcelID?: string | null
          PropertyID?: number
          SaleDate?: string | null
          SalePrice?: number | null
          "Situs City"?: string | null
          "Situs Location"?: string | null
          State?: string | null
          "Total Appraised Improvement Value"?: string | null
          "Total Appraised Land Value"?: string | null
          "Total Area Unit Type"?: string | null
          "Total Assessed Value"?: number | null
          "Total Taxable Value"?: number | null
          "Total Value Exemption"?: string | null
          TotalArea?: string | null
          TransferBook?: number | null
          TransferPage?: number | null
          ZipCode?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_transaction_County_fkey"
            columns: ["County"]
            isOneToOne: false
            referencedRelation: "county"
            referencedColumns: ["id"]
          }
        ]
      }
      state: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never
