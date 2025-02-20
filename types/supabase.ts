export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      academic_majors: {
        Row: {
          id: number
          major: string | null
          path: string | null
          url: string | null
        }
        Insert: {
          id?: number
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Update: {
          id?: number
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Relationships: []
      }
      "qa-after": {
        Row: {
          answer: string | null
          id: number
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      "qa-before": {
        Row: {
          answer: string | null
          id: number
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      "question-input": {
        Row: {
          created_at: string
          id: number
          question: string | null
          sender_email: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          question?: string | null
          sender_email?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          question?: string | null
          sender_email?: string | null
        }
        Relationships: []
      }
      "question-major-input": {
        Row: {
          answer: string | null
          created_at: string
          email: string | null
          id: number
          major: string | null
          name: string | null
          question: string | null
        }
        Insert: {
          answer?: string | null
          created_at?: string
          email?: string | null
          id?: number
          major?: string | null
          name?: string | null
          question?: string | null
        }
        Update: {
          answer?: string | null
          created_at?: string
          email?: string | null
          id?: number
          major?: string | null
          name?: string | null
          question?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      cs_path_view: {
        Row: {
          id: number | null
          major: string | null
          path: string | null
          url: string | null
        }
        Insert: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Update: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Relationships: []
      }
      engineering_path_view: {
        Row: {
          id: number | null
          major: string | null
          path: string | null
          url: string | null
        }
        Insert: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Update: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Relationships: []
      }
      healthy_path_view: {
        Row: {
          id: number | null
          major: string | null
          path: string | null
          url: string | null
        }
        Insert: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Update: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Relationships: []
      }
      kbs_path_view: {
        Row: {
          id: number | null
          major: string | null
          path: string | null
          url: string | null
        }
        Insert: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Update: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Relationships: []
      }
      others_path_view: {
        Row: {
          id: number | null
          major: string | null
          path: string | null
          url: string | null
        }
        Insert: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Update: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Relationships: []
      }
      qa_after_akhra: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_after_ekhtebarat_baad_qobul: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_after_entisab_taalum: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_after_lugha: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_after_raghbat_takhsis_taskin: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_after_seha_nafsia: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_after_tahdiri: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_before_akhra: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_before_ebtiaath: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_before_ekhtebarat: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_before_mostalahat: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_before_mozona: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      qa_before_seha_nafsia: {
        Row: {
          answer: string | null
          id: number | null
          question: string | null
          type: string | null
        }
        Insert: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Update: {
          answer?: string | null
          id?: number | null
          question?: string | null
          type?: string | null
        }
        Relationships: []
      }
      science_path_view: {
        Row: {
          id: number | null
          major: string | null
          path: string | null
          url: string | null
        }
        Insert: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Update: {
          id?: number | null
          major?: string | null
          path?: string | null
          url?: string | null
        }
        Relationships: []
      }
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
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
