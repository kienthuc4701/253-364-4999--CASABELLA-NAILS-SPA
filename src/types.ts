export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      service: {
        Row: {
          description: string | null
          id: string
          image_url: string | null
          name: string
          parent_id: string | null
          position: number | null
          price: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          parent_id?: string | null
          position?: number | null
          price?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          parent_id?: string | null
          position?: number | null
          price?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_child_id_fkey"
            columns: ["parent_id"]
            referencedRelation: "service"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_parent_id_fkey"
            columns: ["parent_id"]
            referencedRelation: "service"
            referencedColumns: ["id"]
          }
        ]
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