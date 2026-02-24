package com.example.forgotpasswordandotp

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class ForgotPasswordActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_forgot_password)

        val btnContinue = findViewById<Button>(R.id.btnContinue)
        val emailInput = findViewById<EditText>(R.id.emailInput)

        btnContinue.setOnClickListener {
            val email = emailInput.text.toString().trim()

            if (email.isNotEmpty()) {
                val intent = Intent(this@ForgotPasswordActivity, OtpVerifyActivity::class.java)
                startActivity(intent)
            } else {
                Toast.makeText(this, "Please enter your email or phone", Toast.LENGTH_SHORT).show()
            }
        }
    }
}