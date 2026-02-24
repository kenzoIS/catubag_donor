package com.example.forgotpasswordandotp

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class ResetPasswordActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_reset_password)

        val btnContinue = findViewById<Button>(R.id.btnContinue)
        val passwordInput = findViewById<EditText>(R.id.newPasswordInput)

        btnContinue.setOnClickListener {
            if (passwordInput.text.isNotEmpty()) {
                Toast.makeText(this, "Password Reset Successfully!", Toast.LENGTH_LONG).show()
            }
        }
    }
}